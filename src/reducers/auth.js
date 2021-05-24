import {LOG_IN, LOG_OUT, SAVE_CARD, SAVE_CARD_SUCCESS} from '../actions.js';

const initialState = {
	isLoggedIn: false,
  saveCard: false,
  // cardNumber: '',
  // expiryDate: '',
  // cardName: '',
  // cvc: '',
  // token: ''
}

export default function(state = initialState, action){
	switch(action.type) {
  	case LOG_IN: {
    return {
      isLoggedIn: true
    }
    }
    case LOG_OUT: {
    return {isLoggedIn: false}
    }
    case SAVE_CARD_SUCCESS: {
      return {saveCard: true}
    }

    default: 
    return state;
  }
}