import { takeEvery, call, put } from "redux-saga/effects";
import { saveCardSucces } from "../actions";
import { SAVE_CARD } from "../actions";
import { serverSaveCard } from "../api";

export function* saveCardSaga(action){
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const success = yield call(serverSaveCard, cardNumber, expiryDate, cardName, cvc, token);
  if(success.success){
    yield put(saveCardSucces(cardNumber, expiryDate, cardName, cvc, token));
  }
}

export function* cardSaga() {
  yield takeEvery(SAVE_CARD, saveCardSaga);
}