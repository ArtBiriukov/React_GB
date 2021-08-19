import React, { useState } from 'react';
import { changeName } from '../../../store/Profile/action';
import {useSelector, useDispatch } from 'react-redux';
import { selectorName } from '../../../store/Profile/selector';

function Profile() {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const name = useSelector(selectorName);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeName(value));
    setValue('');
  }

  const handleChange = (e) =>{
    setValue(e.target.value);
  }

  return (
    <div className='center'>

      <h2>Это профиль {name}</h2>
      <form action="" onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button onClick={handleSubmit}>Save name</button>
      </form>
    </div>
  )
}

export default Profile;