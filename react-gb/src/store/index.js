import { combineReducers, createStore } from 'redux';
import { chatsReducer } from './Chats/reducer.js';
import { profileReducer } from './Profile/profileReduce.js';

export const store = createStore(
  combineReducers({
    chats:chatsReducer,
    profile: profileReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)