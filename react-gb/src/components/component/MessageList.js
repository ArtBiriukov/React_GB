import React from 'react';
import './Message.css';

function MessageList({messageList}) {

  return(
    <div className="mess__body-content">
      {messageList.map(mess => (
        <div className="mess__body" key={mess.id}>
          <p className="mess__author">{mess.author}</p>
          <p className="mess__text">{mess.text}</p>
        </div> 
      ))}
    </div>    
  )
}

export default MessageList;
