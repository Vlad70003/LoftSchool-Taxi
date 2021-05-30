import { takeEvery, call, put } from "redux-saga/effects";
import { registrationSuccess} from "../actions";
import { REGISTRATION } from "../actions";
import { serverRegistration } from "../api";


export function* registrationSaga(action){
  let {email, password, name, surname} = action.payload;
  let success = yield call(serverRegistration, email, password, name, surname);
  if(success.success) {
    yield put(registrationSuccess())
  }
}

export function* regSaga(){
  yield takeEvery(REGISTRATION, registrationSaga);
}