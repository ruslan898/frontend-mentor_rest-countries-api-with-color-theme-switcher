import { Link } from 'react-router-dom';
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
import './cardDetail.scss';

export default function CardDetail({ data }) {
  const {
    name: { common: name, nativeName },
    region,
    subregion,
    capital: [capital] = [],
    tld: [tld],
    flags: { png: flag, alt },
    population,
    languages,
    currencies,
    borders,
  } = data ?? {};

  const languagesFormatted = Object.values(languages).sort().join(', ');

  const populationFormatted = new Intl.NumberFormat('en-US').format(population);

  const currenciesFormatted = Object.values(currencies || {})
    .reduce((arr, item) => {
      arr.push(item.name);
      return arr;
    }, [])
    .sort()
    .join(', ');

  const nativeNameFormatted = Object.values(nativeName)
    .reduce((arr, item) => {
      if (!arr.includes(item.common)) {
        arr.push(item.common);
      }
      return arr;
    }, [])
    .sort()
    .join(', ');

  const defaultValue = '-';

  countries.registerLocale(en);

  function getCountryNameFromCode(code) {
    return countries.getName(code, 'en');
  }

  const borderCountriesItems = borders.map((code) => {
    const countryName = getCountryNameFromCode(code);

    return (
      <Link to={`/${countryName}`}>
        <li>
          <button className="border-countries-list-item">{countryName}</button>
        </li>
      </Link>
    );
  });

  return (
    <section className="card-detail">
      <img src={flag} alt={alt} className="card-detail-img"></img>
      <div className="card-detail-descr">
        <h2 className="card-detail-title">{name}</h2>
        <div className="card-detail-info">
          <ul className="card-detail-list">
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Native Name:</span>
              {nativeNameFormatted}
            </li>
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Population:</span>
              {populationFormatted}
            </li>
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Region:</span>
              {region}
            </li>
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Sub Region:</span>
              {subregion || defaultValue}
            </li>
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Capital:</span>
              {capital || defaultValue}
            </li>
          </ul>

          <ul className="card-detail-list">
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">
                Top Level Domain:
              </span>
              {tld}
            </li>
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Currencies:</span>
              {currenciesFormatted || defaultValue}
            </li>
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Languages:</span>
              {languagesFormatted}
            </li>
          </ul>
        </div>

        <div className="border-countries">
          <h3 className="border-countries-title">Border Countries:</h3>
          <ul className="border-countries-list">{borderCountriesItems}</ul>
        </div>
      </div>
    </section>
  );
}
