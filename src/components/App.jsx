import MenuBar from './ui/menuBar/MenuBar';
import Index from './ui/index/Index';
import Detail from './ui/detail/Detail';
import './app.scss';

export default function App() {
  return (
    <div className="app">
      <MenuBar />
      <Index />
      {/* <Detail /> */}
    </div>
  );
}
