import { CHAT_ADD, CHAT_REMOVE, MESSAGE_SAND } from "./actionsType";

export const addChat = (chatId, name) => ({
  type: CHAT_ADD,
  payload: {
    chatId,
    name,
  },
});

export const removeChat = (chatId) => ({
  type: CHAT_REMOVE,
  payload: chatId
});

export const sendMessage = (chatId, message) => ({
  type: MESSAGE_SAND,
  payload: {
    chatId,
    message
  },
});

let timeout;

export const sendMessageNew = (chatId, message) => (dispatch) => {
  dispatch(sendMessageNew(chatId, message));

  if (timeout) {
    clearTimeout(timeout);
  }
  
  timeout = setTimeout(()=> {
    dispatch(
      sendMessage(chatId, {author: 'bot', text: 'Привет thunk'})
    )
  }, 1000);
};

