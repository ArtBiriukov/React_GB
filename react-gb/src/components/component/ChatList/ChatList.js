import React from 'react';

// import { ListItem } from '@material-ui/core';
// import { Link } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
// import ListItemText from '@material-ui/core/ListItemText';

import ChatItem from '../ChatItem/ChatItem.js';
import AddChat from './AddChat.js';
import '../../../App.css';

// const useStyles = makeStyles(() => ({
//   classBox:{
//     backgroundColor: '#d46767',
//     borderRadius: 10,
//     marginBottom: 15,
//     cursor: 'pointer',
//   }
// }));

function ChatList({chats}) {

  // const classes = useStyles();

  return ( 
    <div className="chat-list__body">
     <h2>Список чатов</h2>
      <div className="chat-list__content"> 

      <ChatItem chatItme={chats} classList='list__bord_content' /> 
       
        {/* {Object.values(chats).map(item => (
          <Link to={`/home/${item.id}`}>
            <ListItem className={classes.classBox} key = {item.id}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
          </ListItem>
          </Link>
        ))} */}

      </div>
      
      <AddChat />
    </div>
  )
}

export default ChatList;