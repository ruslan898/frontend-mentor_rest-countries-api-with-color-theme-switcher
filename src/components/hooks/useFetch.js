import useSWR from 'swr';

export function useFetch(url) {
  async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  const { data, error, isLoading } = useSWR(
    `https://restcountries.com${url}`,
    fetchData,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    },
  );

  return { data, error, isLoading };
}
