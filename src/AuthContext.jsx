import React from 'react';

export let AuthContext = React.createContext();

export let AuthProvider = ({children}) => {
    let [isLoggedIn, setIsLoggedIn] = React.useState(false);

    let logIn = (email, password) => {
        if( email !== 'test@test.com' || password !== 'test'){
            return;
        }
        setIsLoggedIn(true);
    }

    let logOut = () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value = {{logIn, logOut, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
};

export let withAuth = (WrapperComponent) => {
    return class extends React.Component {
        render(){
            return(
                <AuthContext.Consumer>
                    {
                        (value) => {
                            return <WrapperComponent {...value} {...this.props}/>
                        }
                    }
                </AuthContext.Consumer>
            )
        }
    }
}