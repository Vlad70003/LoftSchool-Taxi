import { logIn } from './actions';
import { serverLogin } from './api';
import { AUTHENTICATE } from './actions';

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
}