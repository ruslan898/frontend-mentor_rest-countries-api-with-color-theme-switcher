import useSWR from 'swr';
import { fetchAllCountries, fetchCountry } from '../utility/utils';

type FetchResult<T> = {
  data: T | undefined;
  error: any;
  isLoading: boolean;
};

export function useFetch<T>(url: string | string[]): FetchResult<T> {
  const fetchFn = Array.isArray(url) ? fetchAllCountries : fetchCountry;

  const { data, error, isLoading } = useSWR(url, fetchFn, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return { data, error, isLoading };
}
