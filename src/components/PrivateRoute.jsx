import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  const user = { email: '' };

  return (
    <Route {...rest}>{user.email ? children : <Redirect to="/login" />}</Route>
  );
}
