import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { getCountryInfo } from '../../utility/utils';
import Button from '../../components/ui/button/Button';
import CardDetail from '../../components/ui/cardDetail/CardDetail';
import Placeholder from '../../components/ui/placeholder/Placeholder';
import './detail.scss';

export default function Detail() {
  const { name } = useParams();

  const countryCode = getCountryInfo('code', name);

  const { data, error, isLoading } = useFetch(
    `/v3.1/alpha/${countryCode || name}`,
  );

  if (error) return <Placeholder type="error" className="pos-center" />;
  if (isLoading) return <Placeholder type="loading" className="pos-center" />;

  return (
    <div className="detail">
      <div className="container">
        <Button />
        <CardDetail data={data[0]} />
      </div>
    </div>
  );
}
