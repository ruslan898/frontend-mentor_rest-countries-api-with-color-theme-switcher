import type { Config } from '@netlify/functions';

export default async (request: Request) => {
  if (request.method !== 'GET') {
    return Response.json({ error: 'Method not allowed' }, {
      status: 405,
      headers: { Allow: 'GET' },
    });
  }

  const url = new URL(request.url);
  const lookup = url.pathname.slice('/api/countries'.length);
  if (!['', '/code', '/names.common'].includes(lookup)) {
    return Response.json({ error: 'Unknown country endpoint' }, { status: 404 });
  }

  const upstream = new URL(`https://api.restcountries.com/countries/v5${lookup}`);
  const allowedParams = ['q', 'response_fields', 'limit', 'offset'];
  for (const [key, value] of url.searchParams) {
    if (!allowedParams.includes(key) || value.length > 500) {
      return Response.json({ error: 'Invalid query parameter' }, { status: 400 });
    }
    if (['limit', 'offset'].includes(key) &&
        (!/^\d+$/.test(value) || Number(value) > (key === 'limit' ? 100 : 1000))) {
      return Response.json({ error: 'Invalid pagination' }, { status: 400 });
    }
    upstream.searchParams.set(key, value);
  }
  if (lookup && !upstream.searchParams.get('q')?.trim()) {
    return Response.json({ error: 'A search query is required' }, { status: 400 });
  }

  // Support the existing configuration while allowing a server-only variable name.
  const apiKey = Netlify.env.get('API_KEY') ?? Netlify.env.get('VITE_API_KEY');
  if (!apiKey) {
    return Response.json({ error: 'Countries API is not configured' }, { status: 503 });
  }

  try {
    const response = await fetch(upstream, {
      headers: { Authorization: `Bearer ${apiKey}` },
      signal: AbortSignal.timeout(10_000),
      redirect: 'error',
    });
    if (!response.ok) {
      const status = response.status === 404 ? 404 : response.status === 429 ? 429 : 502;
      return Response.json({ error: 'Countries API request failed' }, { status });
    }
    return Response.json(await response.json());
  } catch {
    return Response.json({ error: 'Countries API is unavailable' }, { status: 502 });
  }
};

export const config: Config = {
  path: ['/api/countries', '/api/countries/:lookup'],
};
