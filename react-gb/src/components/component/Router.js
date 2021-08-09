import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Home from './Home/Home.js'
import Profile from './Profile/Profile.js';

function Router () {
return(
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/profile">Страница профиля</Link>
      </li>
      <li>
        <Link to="/home">Страница с чатами</Link>
      </li>
      <li>
        <Link to="/">Домой</Link>
      </li>
    </ul>

    <Switch>
      <Route path="/profile"
          render={(data) => <Profile match={data.match} />}>
      </Route>

      <Route path="/home/:chatId?">
        <Home />
      </Route>

      <Route path="/" exact>
          <h2>Добро пожаловать в чат!</h2>
        </Route>

      <Route path="*">
          <h2>404</h2>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default Router;