import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './button.scss';

export default function Button() {
  return (
    <button className="btn">
      <FontAwesomeIcon icon={faArrowLeft} className='btn-icon' />
      <span>Back</span>
    </button>
  );
}
