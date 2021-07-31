import React, {useState} from 'react';
import { ListItem } from '@material-ui/core';
import MyListItem from './MyListItem';

import { makeStyles } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from '@material-ui/core/ListItemText';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


import './Components.css';

const useStyles = makeStyles((theme) => ({
  classBox:{
    backgroundColor: '#d46767',
    borderRadius: 10,
    marginBottom: 15,
    cursor: 'pointer'
  }
}));


function MyList() {

  const classes = useStyles();

  const [MylistItme, setMylistItme] = useState([
    { name: 'Ivan', id: 3 },
    { name: 'Igor', id: 4 },
    { name: 'Olga', id: 5 }
  ]);

  return ( 
    <div className="list__bord">
      <h2>Список чатов</h2>

      <MyListItem MylistItme={MylistItme} classList='list__bord_content' /> 

      {MylistItme.map(item => (
      <ListItem className={classes.classBox}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item.name} secondary="Jan 9, 2014" />
      </ListItem>
      ))}

    </div>
  )
}

export default MyList;