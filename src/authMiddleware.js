import { logIn, saveCard } from './actions';
import { serverLogin, serverSaveCard } from './api';
import { AUTHENTICATE, CARDREGISTRATION } from './actions';

export const authMiddleware = ( store ) => ( next ) => async (action) => {

    if (action.type === AUTHENTICATE){
        let {email, password} = action.payload;
        let success = await serverLogin(email, password);
        if(success){
            store.dispatch(logIn());
        }
    } else {
        next(action);
    }

    if (action.type === CARDREGISTRATION){
        let {cardNumber, expiryDate, cardName, cvc, token} = action.payload;
        let success = await serverSaveCard(cardNumber, expiryDate, cardName, cvc, token);
        if(success){
            store.dispatch(saveCard());
        }
    } else {
        next(action);
    }
}