import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

import createSagagMiddleware from 'redux-saga';

import { chatsReducer } from './Chats/reducer.js';
import { chatsSaga } from './Chats/saga.js';
import { profileReducer } from './Profile/profileReduce.js';


const persistConfig = {
  key: 'GB-messenger',
  storage,
}

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleware = createSagagMiddleware();


export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

export const persistor = persistStore(store);

sagaMiddleware.run(chatsSaga);