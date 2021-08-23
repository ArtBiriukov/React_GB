import React, { useEffect, useState } from 'react';
import firebase from "firebase";
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

import { Button, Menu, MenuItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ViewListIcon from '@material-ui/icons/ViewList';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TvIcon from '@material-ui/icons/Tv';

import Home from './Home/Home.js'
import Profile from './Profile/Profile.js';
import WellcomePage from './WellcomePage/index.js';
import { NoChat } from './Nochat/index.js';
import { News } from './News/index.js';
import { Login } from './Login/index.js';

import { PrivateRoute } from '../components/HOC/PrivateRoute.js';
import { PublicRoute } from '../components/HOC/PublicRoute.js';

import './Components.css';

function Router () {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {

      if (user) {
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
      }
    });

  }, []);

return(
  <BrowserRouter>

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
        <MenuItem onClick={handleClose}><Link className="menu__link" to="/news"><TvIcon /><span className='menu__link-title'>Cтраница с новостями</span> </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className="menu__link" to="/profile"><AccountCircleIcon /><span className='menu__link-title'>Cтраница профиля</span> </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className="menu__link" to="/home"><ViewListIcon /><span className='menu__link-title'>Страница с чатами</span></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className="menu__link" to="/"><HomeIcon /><span className='menu__link-title'>Домой</span></Link></MenuItem>
      </Menu> 
      </div>

    <Switch>

      <Route path="/news">
        <News />
      </Route>

      <PrivateRoute authed={isAuthed} path="/profile"
          render={(data) => <Profile match={data.match} history={data.history}/>}>
      </PrivateRoute>

      <PrivateRoute authed={isAuthed} path="/home/:chatId?">
        <Home />
      </PrivateRoute>

      <PrivateRoute authed={isAuthed} path="/nochat">
        <NoChat />
      </PrivateRoute>

      <PublicRoute authed={isAuthed} path="/login" exact>
        <Login />
      </PublicRoute>

      <PublicRoute authed={isAuthed} path="/signup" exact>
        <Login isSignUp />
      </PublicRoute>

      <Route path="/" exact>
          <WellcomePage /> 
      </Route>

      <Route path="*">
        <div className='center type404'>
          <h2 className='type404__title'>404</h2>
          <p className='type404__text'>не найдена страница</p>
        </div>
      </Route>
    
    </Switch>
  </BrowserRouter>
  );
}

export default Router;