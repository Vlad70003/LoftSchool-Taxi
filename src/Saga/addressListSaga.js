import { takeEvery, call, put } from "redux-saga/effects";
import { saveAdressList} from "../actions";
import { LOAD_ADRESS_LIST } from "../actions";
import { serverAddressList } from "../api";
let storage = localStorage;

export function* addressListSaga(){
  const addressList = yield call(serverAddressList);
  storage['addressList'] = JSON.stringify(addressList.addresses);
  yield put(saveAdressList(addressList.addresses));
}

export function* addressSaga(){
  yield takeEvery(LOAD_ADRESS_LIST, addressListSaga);
}