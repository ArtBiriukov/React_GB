import React from 'react';
import '../../App.css';
import { ListItem } from '@material-ui/core';
import ChatItem from './ChatItem';
import { Link } from "react-router-dom";
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


function ChatList({chats}) {

  const classes = useStyles();

  return ( 
    <div className="chat-list__body">
     <h2>Список чатов</h2>
      <div className="chat-list__content">  
      <ChatItem chatItme={chats} classList='list__bord_content' /> 
       
        {Object.values(chats).map(item => (
            <ListItem className={classes.classBox} key = {item.id}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <Link to={`/home/${item.id}`}>
              <ListItemText primary={item.name} />
              </Link>
          </ListItem>
        ))}
      </div>
    </div>
  )
}

export default ChatList;