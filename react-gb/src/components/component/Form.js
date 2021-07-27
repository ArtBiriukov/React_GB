import React, { useState } from 'react';

import './Message.css';

function Form({onSendMessag}) {
  const [value, setValue] = useState('');

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
  }

  return (
    <form className="mess__toolbar" onSubmit={handelSubmit}>
      <input type="text" className="mess__input" placeholder="Введите сообщение" value={value} onChange={handleClick} /> 
      <button className="mess__btn" type="sybmit">
      <img alt='arrow' src="https://img.icons8.com/flat-round/64/000000/arrow--v1.png"/>
      </button>
    </form>
  )
}

export default Form;