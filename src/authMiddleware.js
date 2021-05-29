import { logIn, saveCard, saveCardSucces} from './actions';
import { serverLogin, serverSaveCard } from './api';
import { AUTHENTICATE, SAVE_CARD } from './actions';

export const authMiddleware = ( store ) => ( next ) => async (action) => {

    if (action.type === AUTHENTICATE){
        let {email, password} = action.payload;
        let success = await serverLogin(email, password);
        if(success.success){
            let storage = localStorage;
            storage['userLogin'] = JSON.stringify([email, password, success.token]);
            store.dispatch(logIn());
        }else {
            let conteiner = document.querySelector('.error-message');
            conteiner.style.opacity = 1;
        }
    } else {
        next(action);
    }

    if (action.type === SAVE_CARD){
        let {cardNumber, expiryDate, cardName, cvc, token} = action.payload;
        let success = await serverSaveCard(cardNumber, expiryDate, cardName, cvc, token);
        if(success.success){
            store.dispatch(saveCardSucces(cardNumber, expiryDate, cardName, cvc, token));
        }
    } else {
        next(action);
    }
}