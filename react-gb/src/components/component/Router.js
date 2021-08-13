import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

import { Button, Menu, MenuItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ViewListIcon from '@material-ui/icons/ViewList';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Home from './Home/Home.js'
import Profile from './Profile/Profile.js';
import WellcomePage from './WellcomePage/index.js';

import './Components.css';

function Router () {

  const [anchorEl, setAnchorEl] = React.useState(null);
// 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
// 
  const handleClose = () => {
    setAnchorEl(null);
  };

return(
  <BrowserRouter>
      {/* <ul>
        <li>
          <Link to="/profile">Страница профиля</Link>
        </li>
        <li>
          <Link to="/home">Страница с чатами</Link>
        </li>
        <li>
          <Link to="/">Домой</Link>
        </li>
      </ul> */}

    <div className='top__menu'> 
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Меню
      </Button>
      <Menu className='bottom__menu'
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><AccountCircleIcon /><Link className="menu__link" to="/profile">Страница профиля</Link></MenuItem>
        <MenuItem onClick={handleClose}><ViewListIcon /><Link className="menu__link" to="/home">Страница с чатами</Link></MenuItem>
        <MenuItem onClick={handleClose}><HomeIcon /><Link className="menu__link" to="/">Домой</Link></MenuItem>
      </Menu> 
      </div>

    <Switch>
      <Route path="/profile"
          render={(data) => <Profile match={data.match} />}>
      </Route>

      <Route path="/home/:chatId?">
        <Home />
      </Route>

      <Route path="/" exact>
          <WellcomePage /> 
      </Route>

      <Route path="*">
          <h2>404</h2>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default Router;