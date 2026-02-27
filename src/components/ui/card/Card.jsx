import './card.scss';

export default function Card({
  capital,
  name,
  flag: { img, alt },
  population,
  region,
}) {
  return (
    <div className="card">
      <img src={img} alt={alt} className="card-img"></img>
      <div className="card-descr">
        <h2 className="card-title">{name}</h2>
        <ul className="card-info">
          <li className="card-info-item">
            <span className="card-info-category">Population:</span>
            {population}
          </li>
          <li className="card-info-item">
            <span className="card-info-category">Region:</span>
            {region}
          </li>
          <li className="card-info-item">
            <span className="card-info-category">Capital:</span>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
}
