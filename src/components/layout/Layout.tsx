import { Outlet } from 'react-router-dom';
import MenuBar from '../ui/menuBar/MenuBar';

export default function Layout() {
  return (
    <div className="app">
      <MenuBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
