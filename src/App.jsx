import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Auth from './views/Auth';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <h1>GuestBook</h1>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
