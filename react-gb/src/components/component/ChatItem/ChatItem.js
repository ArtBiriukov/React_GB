import React from 'react';
import { Link } from "react-router-dom";
import '../../../App.css';

function ChatItem({chatItme}) {
  return ( 
    <>
     {Object.values(chatItme).map(item => (
       <Link className="chat-item__link" key={item.id} to={`/home/${item.id}`}>
         <div className="chat-item__body">
          <img className="chat-item__icon" src="https://via.placeholder.com/40" alt="avatar"></img>
          <p className="chat-item__name"> {item.name}</p>
          </div> 
        </Link>
      ))}
    </>
  )
}

export default ChatItem;