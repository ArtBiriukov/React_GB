import React, {useState, useEffect, useCallback} from 'react';
import MessageList from './components/component/MessageList.js';
import Form from './components/component/Form.js';

import './App.css';

function App() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {

      const robotMess = { author: 'Robot', text: 'hello', id: Date.now()};
      
      setTimeout(() => {
        setMessageList([...messageList, robotMess]);
      }, 1500);
    }
  }, [messageList]);

 const handleSendMessage = useCallback((newMessage) => {

     setMessageList([...messageList, newMessage]);
   }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
          <div className="mess__content">
            <MessageList messageList={messageList} />
            <hr />
            <Form onSendMessag={handleSendMessage} /> 
          </div>
      </header>
    </div>
  );
}

export default App;
