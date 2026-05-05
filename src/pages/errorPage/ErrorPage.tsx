import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="error-placeholder pos-center">
      <h2 className="error-title">An error occured!</h2>
      <p>Could not find this page!</p>
      <Link to="/" className="error-link">
        Back to main page
      </Link>
    </div>
  );
}
