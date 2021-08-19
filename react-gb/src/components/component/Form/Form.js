import React, { useRef, useEffect } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';

import '../../../App.css';
import { useInput } from '../../../store/useInput';

function Form({ onSendMessag }) {

  const textInput = useRef();

  const { value, handleClick, reset } = useInput('');

  const handelSubmit = (e) => {
    e.preventDefault();

    onSendMessag({
      id: Date.now(),
      text: value
    });
    reset();
  }
  
  useEffect(() => {
    textInput.current?.focus();
  }, []);

    return (
    <form className="message__form" onSubmit={handelSubmit}>
      <input className="message__form-input" ref={textInput} autoFocus type="text" placeholder="Напешите сообщение ..." value={value}   onChange={handleClick} /> 

      <button className="message__form-btn" type="submit">

      <ListItemIcon>
            <SendIcon className="message__icon" fontSize="small" />
      </ListItemIcon>

      </button>
    </form>
  )
}

export default Form;