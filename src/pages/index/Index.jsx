import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../components/hooks/useFetch';
import SearchBar from '../../components/ui/searchBar/SearchBar';
import DropDown from '../../components/ui/dropDown/DropDown';
import Card from '../../components/ui/card/Card';
import Placeholder from '../../components/ui/placeholder/Placeholder';
import './index.scss';

export default function Index() {
  const [searchVal, setSearchVal] = useState('');
  const [filterVal, setFilterVal] = useState('');

  const { data, error, isLoading } = useFetch(
    '/v3.1/all?fields=name,flags,capital,region,population,cca3',
  );
  if (error) return <Placeholder type="error" className="pos-center" />;
  if (isLoading) return <Placeholder type="loading" className="pos-center" />;

  function search(value) {
    const valueLow = value.toLowerCase();

    if (value.length > 1) {
      return data.filter((item) => {
        const nameLow = item.name.common.toLowerCase();
        return nameLow.includes(valueLow);
      });
    } else {
      return data;
    }
  }

  function filter(arr) {
    if (filterVal) {
      return arr.filter((item) => item.region === filterVal);
    } else {
      return arr;
    }
  }

  function handleInputChange(e) {
    const inputValue = e.currentTarget.value;
    setSearchVal(inputValue);
  }

  function changeFilter(value) {
    setFilterVal(value);
  }

  const filteredData = filter(search(searchVal));

  const cards = filteredData.map((item) => {
    const {
      capital,
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
          <SearchBar value={searchVal} onInputChange={handleInputChange} />
          <DropDown onFilter={changeFilter} filterVal={filterVal} />
        </div>
        <ul className="cards-grid">{displayedItems}</ul>
      </div>
    </div>
  );
}
