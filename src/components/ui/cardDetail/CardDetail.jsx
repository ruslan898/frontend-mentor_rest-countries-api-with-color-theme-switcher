import './cardDetail.scss';

export default function CardDetail() {
  return (
    <section className="card-detail">
      <div className="card-detail-img"></div>
      <div className="card-detail-descr">
        <h2 className="card-detail-title">Belgium</h2>
        <div className="card-detail-info">
          <ul className="card-detail-list">
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Native Name:</span>
              België
            </li>
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Population:</span>
              11,319,511
            </li>
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Region:</span>
              Europe
            </li>
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Sub Region:</span>
              Western Europe
            </li>
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Capital:</span>
              Brussels
            </li>
          </ul>

          <ul className="card-detail-list">
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">
                Top Level Domain:
              </span>
              .be
            </li>
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Currencies:</span>
              Euro
            </li>
            <li className="card-detail-list-item">
              <span className="card-detail-list-category">Languages:</span>
              Dutch, French, German
            </li>
          </ul>
        </div>

        <div className="border-countries">
          <h3 className="border-countries-title">Border Countries:</h3>
          <ul className="border-countries-list">
            <li>
              <button className="border-countries-list-item">France</button>
            </li>
            <li>
              <button className="border-countries-list-item">Germany</button>
            </li>
            <li>
              <button className="border-countries-list-item">
                Netherlands
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
