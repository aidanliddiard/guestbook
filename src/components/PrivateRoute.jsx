import { Redirect, useLocation, Route } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUser();
  const location = useLocation();

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
