import React, { useCallback} from 'react';
import { useHistory, useParams } from "react-router-dom";

import MessageList from '../MessageList/MessageList.js';
import ChatList from '../ChatList/ChatList.js';
import Form from '../Form/Form.js';

import '../../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../store/Chats/actions.js';
import { selectorName } from '../../../store/Profile/selector.js';

function Home() {

  const { chatId } = useParams();
  const history = useHistory();

  const chats = useSelector(state => state.chats);
  const name = useSelector(selectorName);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback((newMessage) => {
    if (newMessage.text === '') {
      newMessage.text = 'Привет мир!';
    } 
    dispatch(sendMessage(chatId, {...newMessage, author: name}));
    },
    [chatId]
  );

  if (!!chatId && !chats[chatId]) {
    history.replace('/nochat');
  }
  
  if (!!chatId && chats[chatId]?.messages) {
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
              <h2 className="messages__content-title">Выберите чат слево</h2>
            </div>
          
          </div>
      </div>
    );
  }

}

export default Home;
