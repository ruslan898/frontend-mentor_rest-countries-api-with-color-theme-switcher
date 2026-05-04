import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useSearchState } from '../../features/search/hooks/useSearchState';
import { search } from '../../utility/utils';
import SearchBar from '../../components/ui/searchBar/SearchBar';
import DropDown from '../../components/ui/dropDown/DropDown';
import Card from '../../components/ui/card/Card';
import Placeholder from '../../components/ui/placeholder/Placeholder';
import './index.scss';
import { useFilterState } from '../../features/filter/hooks/useFilterState';
import type { Country } from '../../types';

export default function Index() {
  const { searchVal, setSearch } = useSearchState();
  const { filterVal, filter, changeFilter } = useFilterState();

  const { data, error, isLoading } = useFetch<Country[]>(
    '/v3.1/all?fields=name,flags,capital,region,population,cca3',
  );
  if (error) return <Placeholder type="error" className="pos-center" />;
  if (isLoading) return <Placeholder type="loading" className="pos-center" />;

  if (!data) {
    return <Placeholder type="error" className="pos-center" />;
  }
  const filteredData = filter(search(searchVal, data));

  const cards = filteredData.map((item) => {
    const {
      capital: [capital],
      name: { common: name },
      flags: { png, alt },
      population,
      region,
    } = item;

    const flag = { img: png, alt };

    const populationFormatted = new Intl.NumberFormat('en-US').format(
      population,
    );

    return (
      <li key={name}>
        <Link to={`/${name}`} className="link">
          <Card
            capital={capital}
            name={name}
            flag={flag}
            population={populationFormatted}
            region={region}
            key={name}
          />
        </Link>
      </li>
    );
  });

  const displayedItems =
    cards.length > 0 ? (
      cards
    ) : (
      <Placeholder type="not-found" className="pos-center" />
    );

  return (
    <div className="index">
      <div className="container">
        <div className="actions-block">
          <SearchBar value={searchVal} onInputChange={setSearch} />
          <DropDown onFilter={changeFilter} filterVal={filterVal} />
        </div>
        <ul className="cards-grid">{displayedItems}</ul>
      </div>
    </div>
  );
}
