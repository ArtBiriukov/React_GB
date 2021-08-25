import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

import { Button, Menu, MenuItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ViewListIcon from '@material-ui/icons/ViewList';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TvIcon from '@material-ui/icons/Tv';

import Home from './Home/Home.js'
import { NoChat } from './Nochat/index.js';

import Profile from './Profile/Profile.js';
import WellcomePage from './WellcomePage/index.js';

import './Components.css';
import { News } from './News/index.js';


function Router () {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

      <Route path="/profile"
          render={(data) => <Profile match={data.match} history={data.history}/>}>
      </Route>

      <Route path="/home/:chatId?">
        <Home />
      </Route>

      <Route path="/nochat">
        <NoChat />
      </Route>

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