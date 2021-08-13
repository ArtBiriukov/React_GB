import { CHAT_REMOVE, MESSAGE_SAND } from "./actionsType";
import { CHAT_ADD } from "./actionsType";

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

