import { CHAT_ADD, CHAT_REMOVE, MESSAGE_SAND } from "./actionsType";

const initialState = {
  chat1: {
    name: "Ivan",
    id: "chat1",
    messages: [{ text: "Первый чат", author: 'Ivan', id: "chat1-1" }]
  },

  chat2: {
    name: "Igor",
    id: "chat2",
    messages: [{ text: "Второй чат", author: 'Igor', id: "chat2-1" }]
  },

  chat3: { 
    name: "Olga", 
    id: "chat3", 
    messages: [], 
  },
};

export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHAT_ADD: {
      return {
        ...state,
        [payload.chatId]: {
          name: payload.name,
          id: payload.chatId,
          messages: [],
        },
      };
    }

    case CHAT_REMOVE: {
      const newState = { ...state };
      delete newState[payload];

      return newState;
    }


    case MESSAGE_SAND: {
      return {
        ...state,
        [payload.chatId]: {
          ...state[payload.chatId],
          messages: [...state[payload.chatId].messages, payload.message],
        },
      };
    }
    default:
      return state;
  }
};
