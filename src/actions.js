export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const SAVE_CARD = 'SAVE_CARD';
export const SAVE_CARD_SUCCESS = 'SAVE_CARD_SUCCESS';
export const SAVE_CARD_SUCCESS_OUT = 'SAVE_CARD_SUCCESS_OUT';
export const REGISTRATION = "REGISTRATION";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";

export const logIn = () => ({type: LOG_IN});
export const logOut = () => ({type: LOG_OUT});
export const saveCardOut = () => ({type: SAVE_CARD_SUCCESS_OUT});

export const authenticate = (email, password) => ({
type: AUTHENTICATE, 
payload: {email, password}
});

export const saveCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
type: SAVE_CARD,
payload: {cardNumber, expiryDate, cardName, cvc, token}
})
export const saveCardSucces = (cardNumber, expiryDate, cardName, cvc, token) => ({
    type: SAVE_CARD_SUCCESS,
    payload: {cardNumber, expiryDate, cardName, cvc, token}
})

export const registration = (registration, email, password, name, surname) => ({
    type: REGISTRATION,
    payload: { registration, email, password, name, surname }
  });
  export const registrationSuccess = (
    registration,
    email,
    password,
    name,
    surname
  ) => ({
    type: REGISTRATION_SUCCESS,
    payload: { registration, email, password, name, surname }
  });
