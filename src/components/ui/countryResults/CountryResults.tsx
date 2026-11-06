import { Link } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import type { Country } from '../../../types';
import Card from '../card/Card';
import Placeholder from '../placeholder/Placeholder';

type CountryResultsProps = { countries: Country[] };

export default function CountryResults({ countries }: CountryResultsProps) {
  const [filteredData] = useDebounce(countries, 300);

  const cards = filteredData.map((item) => {
    const {
      capitals,
      names: { common: name },
      flag: { url_png, description },
      population,
      region,
    } = item;

    let capital = '';

    if (capitals.length > 0) {
      capital = capitals[0].name;
    }

    const flag = { img: url_png, alt: description };

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

  return <ul className="cards-grid">{displayedItems}</ul>;
}
