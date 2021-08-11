import React, {useState, useEffect, useCallback} from 'react';
import { useParams } from "react-router-dom";

import MessageList from '../MessageList/MessageList.js';
import ChatList from '../ChatList/ChatList.js';
import Form from '../Form/Form.js';

import '../../../App.css';

const initialChats = {
  chat1: {
    name: "Ivan",
    id: "chat1",
    messages: [{ text: "Первый чат", author: 'Ivan', id: "chat1-1" }]
  },
  chat2: {
    name: "Igor",
    id: "chat2",
    messages: [{ text: "Второй чат", author: 'Igor', id: "chat2-1" }]
  },
  chat3: { 
    name: "Olga", 
    id: "chat3", 
    messages: [] 
  },
};

function Home() {

const { chatId } = useParams();

const [chats, setChats] = useState(initialChats);

const handleSendMessage = useCallback((newMessage) => {
     
    if (newMessage.text === '') {
       newMessage.text = 'Привет мир!';
     } 

    setChats({...chats,[chatId]: {...chats[chatId], messages: [...chats[chatId].messages, newMessage],},
            });
  },
  [chats, chatId]
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

  return (
    <div className="App"> 
        <div className="app__content">
        <ChatList chats={chats} />
        {!!chatId && (
          <div className="messages__content">
            <MessageList messageList={chats[chatId].messages} />
            <Form onSendMessag={handleSendMessage} /> 
          </div>
          )}
        </div>
    </div>
  );
}

export default Home;
