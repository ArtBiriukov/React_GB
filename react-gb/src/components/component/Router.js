import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';


export const Router = () => {
return(
  <BrowserRouter>
  <ul>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
    <li>
      <Link to="/">Home</Link>
    </li>
  </ul>
  <Switch>
    <Route path="/profile">
      <Profile />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
  </BrowserRouter>
  )
}