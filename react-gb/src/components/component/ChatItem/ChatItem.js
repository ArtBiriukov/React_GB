import React from 'react';
import { Link } from "react-router-dom";
import '../../../App.css';
import { RemoveChat } from './RemoveChat';

function ChatItem({chatItme}) {
  return ( 
    <>
     {Object.values(chatItme).map(item => (
      <div className="chat-item__body">
        <Link className="chat-item__link" key={item.id} to={`/home/${item.id}`}>
          <img className="chat-item__icon" src="https://via.placeholder.com/40" alt="avatar"></img>
          <p className="chat-item__name"> {item.name}</p>
        </Link>
        <RemoveChat chatID={item.id} />
      </div> 
      ))}
    </>
  )
}

export default ChatItem;