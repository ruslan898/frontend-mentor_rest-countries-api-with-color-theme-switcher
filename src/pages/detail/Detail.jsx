import { useParams } from 'react-router-dom';
import { useFetch } from '../../components/hooks/useFetch';
import Button from '../../components/ui/button/Button';
import CardDetail from '../../components/ui/cardDetail/CardDetail';
import './detail.scss';

export default function Detail() {
  const { name } = useParams();

  const { data, error, isLoading } = useFetch(`name/${name}`);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="detail">
      <div className="container">
        <Button />
        <CardDetail data={data[0]} />
      </div>
    </div>
  );
}
