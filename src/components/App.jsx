import MenuBar from './ui/menuBar/MenuBar';
import SearchBar from './ui/searchBar/SearchBar';
import DropDown from './ui/dropDown/DropDown';
import Card from './ui/card/Card';
import './app.scss';

export default function App() {
  return (
    <div className="app">
      <MenuBar />
      <main className="index">
        <div className="container">
          <div className="actions-block">
            <SearchBar />
            <DropDown />
          </div>
          <ul className='cards-grid'>
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
    </div>
  );
}
