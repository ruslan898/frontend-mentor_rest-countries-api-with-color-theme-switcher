import './card.scss'

export default function Card() {
  return (
    <div className="card">
      <div className="card-img"></div>
      <div className="card-descr">
        <h2 className="card-title">Germany</h2>
        <ul className="card-info">
          <li className="card-info-item">
            <span className="card-info-category">Population:</span>
            81,770,900
          </li>
          <li className="card-info-item">
            <span className="card-info-category">Region:</span>
            Europe
          </li>
          <li className="card-info-item">
            <span className="card-info-category">Capital:</span>
            Berlin
          </li>
        </ul>
      </div>
    </div>
  );
}