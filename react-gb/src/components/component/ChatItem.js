import React from 'react';
import '../../App.css';

function ChatItem({chatItme}) {
  return ( 
    <>
     {chatItme.map(item => (
        <div className="chat-item__body" key={item.id}>
          <img className="chat-item__icon" src="https://via.placeholder.com/40" alt="avatar"></img>
          <p className="chat-item__name"> {item.name}</p> 
        </div> 
      ))}
    </>
  )
}

export default ChatItem;