import React from 'react';
import './Components.css';

function MessageList({messageList}) {

console.log(messageList);

  return(
    <div className="messages__bord">
      {messageList.map(mess => (
        <div className="message__body" key={mess.id}>
          <p className="mess__author">{mess.author}</p>
          <p className="mess__text">{mess.text}</p>
        </div> 
      ))}
    </div>    
  )
}

export default MessageList;