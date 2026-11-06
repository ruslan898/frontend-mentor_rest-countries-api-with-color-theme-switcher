import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { getCountryInfo } from '../../utility/utils';
import Button from '../../components/ui/button/Button';
import CardDetail from '../../components/ui/cardDetail/CardDetail';
import Placeholder from '../../components/ui/placeholder/Placeholder';
import './detail.scss';
import type { FetchResultDetail } from '../../types/index';
import { config } from '../../config';

export default function Detail() {
  const { name } = useParams();

  const countryCode = getCountryInfo('code', name);

  const { apiBaseUrl } = config;

  const searchTerm =
    countryCode && countryCode !== 'XKK'
      ? `/code?q=${countryCode}`
      : `/names.common?q=${name}`;

  const url = `${apiBaseUrl}${searchTerm}&response_fields=names.common,names.native,flag.url_png,flag.description,capitals,region,subregion,population,languages,currencies,borders,tlds`;

  const { data, error, isLoading } = useFetch<FetchResultDetail>(url);

  if (error) return <Placeholder type="error" className="pos-center" />;
  if (isLoading) return <Placeholder type="loading" className="pos-center" />;

  return (
    <div className="detail">
      <div className="container">
        <Button />
        <CardDetail data={data?.data.objects[0]} />
      </div>
    </div>
  );
}
