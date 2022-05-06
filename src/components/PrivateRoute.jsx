import { Redirect, useLocation, Route } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  console.log('children', children);
  const { user } = useUser();
  console.log('context', user);

  const location = useLocation();
  console.log('location', location);

  return (
    <Route {...rest}>
      {user.email ? (
        children
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  );
}
