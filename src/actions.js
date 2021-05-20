export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_CARD = 'SAVE_CARD';
export const AUTHENTICATE = 'AUTHENTICATE';
export const CARDREGISTRATION = 'CARDREGISTRATION';

export const logIn = () => ({type: LOG_IN});
export const logOut = () => ({type: LOG_OUT});
export const saveCard = () => ({type: SAVE_CARD})

export const authenticate = (email, password) => ({
type: AUTHENTICATE, 
payload: {email, password}
});

export const cardregistration = (cardNumber, expiryDate, cardName, cvc, token) => ({
type: CARDREGISTRATION,
payload: {cardNumber, expiryDate, cardName, cvc, token}
})