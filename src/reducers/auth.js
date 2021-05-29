import {LOG_IN, LOG_OUT, SAVE_CARD, SAVE_CARD_SUCCESS, SAVE_CARD_SUCCESS_OUT} from '../actions.js';

///LocalStorage
let storage = localStorage;
let userLogin = JSON.parse(storage.getItem('userLogin'));



const initialState = {
	isLoggedIn: false,
  saveCard: false,
  tokenLogin: false,
  // cardNumber: '',
  // expiryDate: '',
  // cardName: '',
  // cvc: '',
}
if(userLogin !== null){
  initialState.tokenLogin = userLogin[2];
}

if(initialState.tokenLogin){
  initialState['isLoggedIn'] = true;
}

export default function auth(state = initialState, action){
	switch(action.type) {
  	case LOG_IN: {
    return {
      ...state, 
      isLoggedIn: true,
    }
    }
    case LOG_OUT: {
    return {
      ...state, isLoggedIn: false, clearLockalStorage: storage.removeItem('userLogin')
    }
    
    }
    case SAVE_CARD_SUCCESS: {
      return {
        ...state, saveCard: true
      }
    }
    case SAVE_CARD_SUCCESS_OUT: {
      return { 
        ...state, saveCard: false
      }
    }

    default: 
    return state;
  }
}