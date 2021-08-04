import React, {useState, useEffect, useCallback} from 'react';
import MessageList from './components/component/MessageList.js';
import Form from './components/component/Form.js';
import ChatList from './components/component/ChatList';

import './App.css';

function App() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {

      const timer = setTimeout(() => {
        const robotMess = { author: 'Robot', text: 'hello', id: Date.now()};
        setMessageList([...messageList, robotMess]);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [messageList]);

 const handleSendMessage = useCallback((newMessage) => {

    if (newMessage.text === '') {
      console.log(newMessage.text = 'Привет мир!');
    } else {
      console.log(newMessage.text);
    }

     setMessageList([...messageList, newMessage]);
   }, [messageList]);

  return (
    <div className="App"> 
        <div className="app__content">
        <ChatList />
          <div className="messages__content">
            <MessageList messageList={messageList} />
            <Form onSendMessag={handleSendMessage} /> 
          </div>
        </div>
    </div>
  );
}

export default App;
