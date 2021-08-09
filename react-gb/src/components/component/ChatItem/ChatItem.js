import React from 'react';
import { Link } from "react-router-dom";
import '../../../App.css';

function ChatItem({chatItme}) {
  return ( 
    <>
     {Object.values(chatItme).map(item => (
        <div className="chat-item__body" key={item.id}>
          <img className="chat-item__icon" src="https://via.placeholder.com/40" alt="avatar"></img>
          <Link className="chat-item__link" to={`/home/${item.id}`}>
            <p className="chat-item__name"> {item.name}</p>
          </Link>
        </div> 
      ))}
    </>
  )
}

export default ChatItem;