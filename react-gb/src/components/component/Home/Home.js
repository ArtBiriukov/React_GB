import React, {useEffect, useCallback} from 'react';
import { useParams } from "react-router-dom";

import MessageList from '../MessageList/MessageList.js';
import ChatList from '../ChatList/ChatList.js';
import Form from '../Form/Form.js';

import '../../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../store/Chats/actions.js';

function Home() {

const { chatId } = useParams();

const chats = useSelector(state => state.chats);
const dispatch = useDispatch();

const handleSendMessage = useCallback((newMessage) => {

  if (newMessage.text === '') {
    newMessage.text = 'Привет мир!';
  } 
  dispatch(sendMessage(chatId, newMessage));
  },
  [chatId]
);

useEffect(() => {
  if (!chatId ||
    !chats[chatId]?.messages.length ||
    chats[chatId].messages[chats[chatId].messages.length - 1].author === 'Bot') {
    return;
  }

  const human = chats[chatId].messages[chats[chatId].messages.length - 1].author;

  const timeout = setTimeout(() => {
    
    const newMessage = {
      author: 'Bot', 
      text: `Привет ${human}`, 
      id: Date.now()
    };

    handleSendMessage(newMessage);
  }, 1000);

  return () => clearTimeout(timeout);
}, [chats]);


if (!!chatId) {
  return (
    <div className="App"> 
        <div className="app__content">
        <ChatList chats={chats} />
      
          <div className="messages__content">
            <MessageList messageList={chats[chatId].messages} />
            <Form onSendMessag={handleSendMessage} /> 
          </div>
          
        </div>
    </div>
  );
} else{
  return (
    <div className="App"> 
        <div className="app__content">
        <ChatList chats={chats} />
      
          <div className="messages__content">
            <h2 className="messages__content-title">Выберите чат с лево</h2>
          </div>
        
        </div>
    </div>
  );
}

}

export default Home;
