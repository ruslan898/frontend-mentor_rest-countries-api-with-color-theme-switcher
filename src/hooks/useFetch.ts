import useSWR from 'swr';
import { fetchData } from '../utility/utils';

type FetchResult<T> = {
  data: T | undefined;
  error: any;
  isLoading: boolean;
};

export function useFetch<T>(url: string): FetchResult<T> {
  const { data, error, isLoading } = useSWR<T>(
    `https://restcountries.com${url}`,
    fetchData,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    },
  );

  return { data, error, isLoading };
}
