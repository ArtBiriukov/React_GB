import { takeEvery, put, delay } from "redux-saga/effects";

import { sendMessage } from "./actions";
import { MESSAGE_SAND } from "./actionsType";

function* onSendMessage(action) {
  if (action.payload.message.author !== 'bot') {
    // console.log("----------", action.payload.message.author);
    
    yield delay(1000);

    yield put(
      sendMessage(action.payload.chatId, {
        text: "message from saga",
        author: 'bot',
        id: Date.now(),
      })
    );
  }
}

export function* chatsSaga() {
  yield takeEvery(MESSAGE_SAND, onSendMessage);
}
