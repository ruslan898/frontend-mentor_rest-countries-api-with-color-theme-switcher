import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Index from '../pages/index/Index';
import Detail from '../pages/detail/Detail';
import './app.scss';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="/:detail" element={<Detail />} />
      </Route>
    </Routes>
  );
}
