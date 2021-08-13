import React, { useState, useRef } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';

import '../../../App.css';

function Form({onSendMessag}) {

  const [value, setValue] = useState('');
  const textInput = useRef(null);
  const handleClick = (e) => {
      setValue(e.target.value);
  }

  const handelSubmit = (e) => {
    e.preventDefault();

    onSendMessag({
      author: 'Nik',
      id: Date.now(),
      text: value
    });

    setValue('');
    textInput.current.focus();
  }

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