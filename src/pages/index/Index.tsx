import { useFetch } from '../../hooks/useFetch';
import { useSearchState } from '../../features/search/hooks/useSearchState';
import { search } from '../../utility/utils';
import SearchBar from '../../components/ui/searchBar/SearchBar';
import DropDown from '../../components/ui/dropDown/DropDown';
import Placeholder from '../../components/ui/placeholder/Placeholder';
import CountryResults from '../../components/ui/countryResults/CountryResults';
import './index.scss';
import { useFilterState } from '../../features/filter/hooks/useFilterState';
import type { Country, FetchResultIndex } from '../../types';
import { config } from '../../config';

export default function Index() {
  const { searchVal, setSearch } = useSearchState();
  const { filterVal, filter, changeFilter } = useFilterState();

  const { apiBaseUrl } = config;

  const fetchUrlBase = `${apiBaseUrl}?response_fields=names.common,flag.url_png,flag.description,capitals,region,population`;

  const urlArr = [
    `${fetchUrlBase}&limit=100`,
    `${fetchUrlBase}&limit=100&offset=100`,
    `${fetchUrlBase}&limit=100&offset=200`,
  ];

  const { data, error, isLoading } = useFetch<FetchResultIndex[]>(urlArr);
  if (error) return <Placeholder type="error" className="pos-center" />;
  if (isLoading) return <Placeholder type="loading" className="pos-center" />;

  if (!data) {
    return <Placeholder type="error" className="pos-center" />;
  }

  const formattedData = data.reduce<Country[]>((result, currentVal) => {
    return [...result, ...currentVal.data.objects];
  }, []);

  const filteredData = filter(search(searchVal, formattedData));

  return (
    <div className="index">
      <div className="container">
        <div className="actions-block">
          <SearchBar value={searchVal} onInputChange={setSearch} />
          <DropDown onFilter={changeFilter} filterVal={filterVal} />
        </div>
        <CountryResults countries={filteredData} />
      </div>
    </div>
  );
}
