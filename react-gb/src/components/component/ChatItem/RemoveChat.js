import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import { removeChat } from '../../../store/Chats/actions';
import { useDispatch } from 'react-redux';

import './style.css';

export const RemoveChat = (id) => {

  const dispatch = useDispatch();

  const RemoveClick = useCallback((id) => {
    console.log(id);
    dispatch(removeChat(id));
  }, []);


  // const RemoveClick = (e) => {
  //   
  //   dispatch(removeChat(id));
  // };
 
  return (
    <div className='del__btn'>
      <Button variant="contained" color="secondary" onClick={RemoveClick}>
          &#215;
      </Button>
    </div>

    
  )
}


// const handleDeleteChat = useCallback((id) => {
//   dispatch(deleteChat(id));
// }, []);

// if (!!chatId && !chats[chatId]) {
//   // return <Redirect to="/nochat" />
//   history.replace('/nochat');
// }