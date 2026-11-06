import { Link } from 'react-router-dom';
import { getCountryInfo } from '../../../utility/utils';
import './cardDetail.scss';
import type { CountryDetail } from '../../../types';
import { config } from '../../../config';
import Placeholder from '../placeholder/Placeholder';

type CardDetailProps = { data: CountryDetail | undefined };

export default function CardDetail({ data }: CardDetailProps) {
  if (!data) {
    return <Placeholder type="error" className="pos-center" />;
  }

  const {
    names: { common: name, native: nativeName },
    region,
    subregion,
    capitals,
    tlds: [tld],
    flag: { url_png: flag, alt },
    population,
    languages,
    currencies,
    borders,
  } = data;

  const { flagPlaceholder } = config;

  let capital = '';

  if (capitals.length > 0) {
    capital = capitals[0].name;
  }

  const languagesFormatted = languages.map((obj) => obj.name).join(', ');

  const populationFormatted = new Intl.NumberFormat('en-US').format(population);

  const currenciesFormatted = Object.values(currencies ?? {})
    .reduce<string[]>((arr, item) => {
      if (item?.name) {
        return [...arr, item.name];
      } else {
        return arr;
      }
    }, [])
    .sort()
    .join(', ');

  const nativeNameFormatted = Object.values(nativeName ?? {})
    .reduce<string[]>((arr, item) => {
      if (item?.common && !arr.includes(item.common)) {
        return [...arr, item.common];
      } else {
        return arr;
      }
    }, [])
    .sort()
    .join(', ');

  const defaultValue = 'N/A';

  const borderCountriesItems =
    borders &&
    borders.map((code) => {
      const countryName = getCountryInfo('name', code);

      return (
        <li key={code}>
          <Link to={`/${countryName}`} className="border-countries-list-item">
            {countryName}
          </Link>
        </li>
      );
    });

  const listItemsContent1 = [
    { name: 'Native Name', value: nativeNameFormatted },
    { name: 'Population', value: populationFormatted },
    { name: 'Region', value: region },
    { name: 'Sub Region', value: subregion },
    { name: 'Capital', value: capital },
  ];

  const listItemsContent2 = [
    { name: 'Top Level Domain', value: tld },
    { name: 'Currencies', value: currenciesFormatted },
    { name: 'Languages', value: languagesFormatted },
  ];

  return (
    <section className="card-detail">
      <img
        src={flag || flagPlaceholder}
        alt={alt}
        className="card-detail-img"
      ></img>
      <div className="card-detail-descr">
        <h2 className="card-detail-title">{name}</h2>
        <div className="card-detail-info">
          <ul className="card-detail-list">
            {listItemsContent1.map((item) => {
              return (
                <li className="card-detail-list-item" key={item.name}>
                  <span className="card-detail-list-category">
                    {`${item.name}:`}
                  </span>
                  {item.value || defaultValue}
                </li>
              );
            })}
          </ul>

          <ul className="card-detail-list">
            {listItemsContent2.map((item) => {
              return (
                <li className="card-detail-list-item" key={item.name}>
                  <span className="card-detail-list-category">
                    {`${item.name}:`}
                  </span>
                  {item.value || defaultValue}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="border-countries">
          <h3 className="border-countries-title">Border Countries:</h3>
          <ul className="border-countries-list">
            {borderCountriesItems.length > 0
              ? borderCountriesItems
              : defaultValue}
          </ul>
        </div>
      </div>
    </section>
  );
}
