import React, {useState} from 'react';
import '../../App.css';
import { ListItem } from '@material-ui/core';
import ChatItem from './ChatItem';

import { makeStyles } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles(() => ({
  classBox:{
    backgroundColor: '#d46767',
    borderRadius: 10,
    marginBottom: 15,
    cursor: 'pointer',
  }
}));


function ChatList() {

  const classes = useStyles();

  const [chatItme, setchatItme] = useState([
    { name: 'Ivan', id: 3 },
    { name: 'Igor', id: 4 },
    { name: 'Olga', id: 5 }
  ]);

  const [chatItmeUi, setchatItmeUi] = useState([
    { name: 'Artem', id: 6 },
    { name: 'Nikolai', id: 7 },
    { name: 'Anna', id: 8 }
  ]);

  return ( 
    <div className="chat-list__body">
     <h2>Список чатов</h2>
      <div className="chat-list__content">  
      <ChatItem chatItme={chatItme} classList='list__bord_content' /> 
        {chatItmeUi.map(item => (
        <ListItem className={classes.classBox}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.name} />
        </ListItem>
        ))}
      </div>
    </div>
  )
}

export default ChatList;