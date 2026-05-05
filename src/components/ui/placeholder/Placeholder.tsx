import { Link } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import './placeholder.scss';

type PlaceholderProps = {
  type: 'loading' | 'error' | 'not-found';
  className?: string;
};

export default function Placeholder({ type, className }: PlaceholderProps) {
  if (type === 'loading') {
    return (
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass={className}
      />
    );
  }

  if (type === 'error') {
    return (
      <div className={`error-placeholder ${className}`}>
        <h2 className='error-title'>
          Failed to load data
        </h2>
        <Link to="/" className='error-link'>Back to main page</Link>
      </div>
    );
  }

  if (type === 'not-found') {
    return (
      <h2 className={`not-found-placeholder ${className}`}>Nothing found</h2>
    );
  }
}
