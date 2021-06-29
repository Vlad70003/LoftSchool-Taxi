import { takeEvery, call, put } from "redux-saga/effects";
import { saveReadyRoute} from "../actions";
import { LOAD_ROUTE } from "../actions";
import { serverReadyRoute } from "../api";

export function* readyRouteSaga(action){
    let {firstRoute, secondRoute} = action.payload;
    let route = yield call(serverReadyRoute, firstRoute, secondRoute);
    yield put(saveReadyRoute(route));
  }

export function* routeSaga(){
    yield takeEvery(LOAD_ROUTE, readyRouteSaga);
  }