import React from 'react';
import '../../App.css';

function MessageList({messageList}) {

  return(
    <div className="messages__bord">
      {messageList.map(message => (
        <div className="message__body" datatype={message.author} key={message.id}>
          <p className="message__author">{message.author}</p>
          <p className="message__text">{message.text}</p>
        </div> 
      ))}
    </div>    
  )
}

export default MessageList;