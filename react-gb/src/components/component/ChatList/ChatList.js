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
import { useParams } from 'react-router';

// const useStyles = makeStyles(() => ({
//   classBox:{
//     backgroundColor: '#d46767',
//     borderRadius: 10,
//     marginBottom: 15,
//     cursor: 'pointer',
//   }
// }));

function ChatList({chats}) {

  const { chatId } = useParams();
  // const classes = useStyles();
  console.log(chats[chatId]);

  

  if (Object.keys(chats).length == 0) {
    return ( 
      <div className="chat-list__body">
      <h2>Список чатов</h2>
        <div className='chats__content'> 
          <div className="chat-list__content"> 
            <h2 className='chat-list__title-empty'>список чатов пустой</h2>      
          </div>
          <AddChat />
        </div>
      </div>
    )
  } else {
    return ( 
      <div className="chat-list__body">
      <h2>Список чатов</h2>
        <div className='chats__content'> 
          <div className="chat-list__content"> 
            <ChatItem chatItme={chats} classList='list__bord_content' />       
          </div>
          <AddChat />
        </div>
      </div>
    )
  }
}

export default ChatList;




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