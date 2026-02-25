import Button from '../button/Button';
import CardDetail from '../cardDetail/CardDetail';
import './detail.scss';

export default function Detail() {
  return (
    <main className="detail">
      <div className="container">
        <Button />
        <CardDetail />
      </div>
    </main>
  );
}
