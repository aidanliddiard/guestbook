import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Auth from './views/Auth';
import Home from './views/Home';
import PrivateRoute from './components/PrivateRoute';
import Welcome from './views/Welcome';

export default function App() {
  return (
    <>
      <h1>GuestBook</h1>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <PrivateRoute path="/welcome">
          <Welcome />
        </PrivateRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </>
  );
}
