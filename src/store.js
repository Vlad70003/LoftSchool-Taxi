import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/auth';
import { authMiddleware } from './authMiddleware';

export const store = createStore(rootReducer, applyMiddleware(authMiddleware));