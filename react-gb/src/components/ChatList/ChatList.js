import React from 'react';

import ChatItem from '../ChatItem/ChatItem.js';
import AddChat from './AddChat.js';
import './style.css';

function ChatList({chats}) {

  if (Object.keys(chats).length === 0) {
    return ( 
      <div className="chat-list__body">
      <h2>Список чатов</h2>
        <div className='chats__content'> 
          <div className="chat-list__content"> 
            <h2 className='chat-list__title-empty'>Список чатов пустой</h2>      
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