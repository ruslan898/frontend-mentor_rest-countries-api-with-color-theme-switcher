import { ThreeCircles } from 'react-loader-spinner';
import './placeholder.scss';

type PlaceholderProps = {
  type: 'loading' | 'error' | 'not-found'
  className?: string
}

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
      <h2 className={`error-placeholder ${className}`}>
        Failed to load <br />
        Please refresh the page
      </h2>
    );
  }

  if (type === 'not-found') {
    return (
      <h2 className={`not-found-placeholder ${className}`}>Nothing found</h2>
    );
  }
}
