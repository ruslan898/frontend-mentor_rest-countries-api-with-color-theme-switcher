import useSWR from 'swr';

export function useFetch(url) {
  async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/${url}`,
    fetchData,
  );

  return { data, error, isLoading };
}
