import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/auth';
import createSagaMiddleware from 'redux-saga';
import { authSaga, regSaga, cardSaga } from './authSaga';
import { addressSaga } from './Saga/addressListSaga';
import { routeSaga } from './Saga/routeSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware ));

sagaMiddleware.run( authSaga );
sagaMiddleware.run( regSaga );
sagaMiddleware.run( cardSaga );
sagaMiddleware.run( addressSaga );
sagaMiddleware.run( routeSaga );