import React from 'react';

import { PROFILE_TOGGLE_SHOW } from '../../../store/Profile/action';
import {useSelector, useDispatch } from 'react-redux';

function Profile() {

  const profileState = useSelector ((state) => state);
  const dispatch = useDispatch();

  const toggleShow = () => {
    dispatch({
      type: PROFILE_TOGGLE_SHOW,
    });
  };

  return (
    <div>
      <h2>JUST PROFILE</h2>

      <button onClick={toggleShow}>TOGGLE show</button>
      {profileState.show && <div>THIS DEPENDS ON GLOBAL REDUX STATE</div>}

    </div>
  )
}

export default Profile;