import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <h1>
      Page is not found go to <Link to="/">Home page</Link>
    </h1>
  );
};