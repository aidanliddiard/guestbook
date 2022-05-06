import { Redirect, useLocation, Route } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  console.log('children', children);
  const context = useUser();
  console.log('context', context);

  const location = useLocation();

  return (
    <Route {...rest}>
      {context.user.email ? (
        children
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  );
}
