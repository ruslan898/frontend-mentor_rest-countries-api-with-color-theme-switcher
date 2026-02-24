import MenuBar from './ui/menuBar/MenuBar';
import SearchBar from './ui/searchBar/SearchBar';
import './app.scss';

export default function App() {
  return (
    <div className="app">
      <MenuBar />
      <SearchBar />
    </div>
  )
}
