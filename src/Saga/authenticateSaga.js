import { takeEvery, call, put } from "redux-saga/effects";
import { logIn } from "../actions";
import { AUTHENTICATE } from "../actions";
import { serverLogin } from "../api";



///Сага авторизации
export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const success = yield call(serverLogin, email, password);
  if (success.success) {
    let storage = localStorage;
    storage['userLogin'] = JSON.stringify([email, password, success.token]);
    yield put(logIn());
  } else {
    let conteiner = document.querySelector('.error-message');
    conteiner.style.opacity = 1;
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}