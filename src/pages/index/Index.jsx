import SearchBar from '../../components/ui/searchBar/SearchBar';
import DropDown from '../../components/ui/dropDown/DropDown';
import Card from '../../components/ui/card/Card';
import './index.scss';

export default function Index() {
  return (
    <div className="index">
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
    </div>
  );
}
