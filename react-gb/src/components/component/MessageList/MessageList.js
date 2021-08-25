import React from 'react';
import { useSelector } from 'react-redux';
import { selectorName } from '../../../store/Profile/selector';
import '../Components.css';

function MessageList({messageList}) {

  const name = useSelector(selectorName);
  console.log(messageList);

if (messageList.length === 0) {
  return(
    <div className="messages__bord">
      <p className="messages__attant">Пока что ничего не написано</p>
    </div>    
  )
} else {
  return(
    <div className="messages__bord">
      { messageList.map(message => (
      <div className="message__body" datatype={message.author} key={message.id}>
        <p className="message__author">{message.author}</p>
        <p className="message__text">{message.text}</p>
      </div> 
      ))}
    </div>    
)}

}

export default MessageList;