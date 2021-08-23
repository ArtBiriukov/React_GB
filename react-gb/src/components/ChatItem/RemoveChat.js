import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';

import './style.css';
import { removeChat } from '../../store/Chats/actions';
import { useDispatch } from 'react-redux';

export const RemoveChat = ({id}) => {

  const dispatch = useDispatch();

  const RemoveClick = useCallback(() => {
    dispatch(removeChat(id));
  }, []);

  return (
    <div className='del__btn'>
      <Button variant="contained" color="secondary" onClick={RemoveClick}>
          &#215;
      </Button>
    </div>
  )
}