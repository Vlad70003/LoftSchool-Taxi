import {LOG_IN, LOG_OUT, SAVE_CARD_SUCCESS, SAVE_CARD_SUCCESS_OUT, REGISTRATION_SUCCESS, SAVE_ADRESS_LIST, SAVE_READY_ROUTE} from '../actions.js';

///LocalStorage
let storage = localStorage;
let userLogin = JSON.parse(storage.getItem('userLogin'));



const initialState = {
	isLoggedIn: false,
  saveCard: false,
  tokenLogin: false,
  registration: false,
  userCard: '',
  adressList: '',
  readyRoute: '',
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
      ...state, 
      isLoggedIn: false, 
      clearLockalStorage: storage.removeItem('userLogin')
    }
    
    }
    case SAVE_CARD_SUCCESS: {
      return {
        ...state, 
        saveCard: true,
        userCard: action.payload,
      }
    }
    case SAVE_CARD_SUCCESS_OUT: {
      return { 
        ...state, saveCard: false
      }
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state, 
        registration: true
      }
    }
    case SAVE_ADRESS_LIST: {
      return{
        ...state, 
        adressList: action.payload,
      }
    }
    case SAVE_READY_ROUTE: {
      return{
        ...state, 
        readyRoute: action.payload,
      }
    }

    default: 
    return state;
  }
}