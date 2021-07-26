import React, {useState, useCallback, useEffect} from 'react';
import './Message.css';

function Message() {
  //Это получается мы так показываем State? 
  const [messageList, setMessageList] = useState([]);


//Дальше идут ХУКИ useEffect useCallback и т.п.?

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {

      const robotMess = { author: 'Robot', text: 'hello', id: 2};
      
      //Вызываем встроенную функцию JS setTimeout для того чтобы получить задержку в 1,5s
      setTimeout(() => {
        setMessageList([...messageList, robotMess]);
      }, 1500);
    }
  }, [messageList]);


// Обьевляем функцию handelClick
  const handleClick = useCallback(() => {
    const newMessage = {author: "Ilya", text: 'Hi', id: 1};

    setMessageList([...messageList, newMessage]);
  }, [messageList]);

  return(
    <div className="mess__content">
      <div className="mess__body-content">

      {messageList.map(mess => (
        <div className="mess__body" key ={mess.id}>
          <p className="mess__author">{mess.author}</p>
          <p className="mes__text">{mess.text}</p>
        </div> 
      ))}
        
    </div> 
    <hr />
      <div className="mess__toolbar">
        <input type="text" className="mess__input" placeholder="Как вас зовут?" />
        <input type="text" className="mess__input" placeholder="Введите сообщение" /> 

        <button className="mess__btn" type="button" onClick={handleClick}>
          <img alt='arrow' src="https://img.icons8.com/flat-round/64/000000/arrow--v1.png"/>
        </button>
      </div>
    </div>
  )
}

export default Message;
