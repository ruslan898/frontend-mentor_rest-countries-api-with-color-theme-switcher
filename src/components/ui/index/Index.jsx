import SearchBar from '../searchBar/SearchBar';
import DropDown from '../dropDown/DropDown';
import Card from '../card/Card';
import './index.scss';

export default function Index() {
  return (
    <main className="index">
      <div className="container">
        <div className="actions-block">
          <SearchBar />
          <DropDown />
        </div>
        <ul className="cards-grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </main>
  );
}
