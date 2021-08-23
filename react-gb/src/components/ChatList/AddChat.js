import React, { useState } from 'react';
import { addChat } from '../../store/Chats/actions';
import { useDispatch} from 'react-redux';
import './style.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function AddChat() {

  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  //содержимое в инпуте
  const handelchange = (e) => {
    setValue(e.target.value);
  };

  //отправка данных
  const handelClick = (e)=> {
    e.preventDefault();

    if(!value){
      return;
    }

    const newId = `chat${Date.now()}`;
    dispatch(addChat(newId, value));
  }

  return (
      <form className='add-chats' >
        <input className='add_input' onChange={handelchange} value={value} placeholder='Добавить чат'></input>
        <button className='add_btn' onClick={handelClick}><AddCircleIcon /></button> 
      </form>
  )
}

export default AddChat;