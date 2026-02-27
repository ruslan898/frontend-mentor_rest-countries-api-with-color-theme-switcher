// import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
// import useSWR from 'swr';
import { useFetch } from '../../components/hooks/useFetch';
import SearchBar from '../../components/ui/searchBar/SearchBar';
import DropDown from '../../components/ui/dropDown/DropDown';
import Card from '../../components/ui/card/Card';
import './index.scss';

export default function Index() {
  const { data, error, isLoading } = useFetch(
    'all?fields=name,flags,capital,region,population',
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const cards =
    data &&
    data.map((item) => {
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
      );
    });

  return (
    <div className="index">
      <div className="container">
        <div className="actions-block">
          <SearchBar />
          <DropDown />
        </div>
        <ul className="cards-grid">{cards}</ul>
      </div>
    </div>
  );
}
