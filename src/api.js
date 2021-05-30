const url = 'https://loft-taxi.glitch.me';

export const serverLogin = async (logInEmail, logInPassword) => {
    return fetch(`${url}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({email: logInEmail, password: logInPassword})
    }).then(res => res.json())
}

export const serverSaveCard = async (cardNumber, expiryDate, cardName, cvc, token) => {

    return fetch(`${url}/card`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cardName: cardName,
            cvc: cvc,
            token: token,
        })
    }).then(res => res.json())
}

export const serverRegistration = async (
    logInEmail,
    logInPassword,
    logInName,
    logInSurname
  ) => {
    return fetch(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        email: logInEmail,
        password: logInPassword,
        name: logInName,
        surname: logInSurname
      })
    }).then((res) => res.json());
  };



