import React from 'react';
import './Login.css'
import {LoginModalWithAuth} from './LoginModal/LoginModal.jsx';
import {RegModalWithAuth} from './RegModal/RegModal.jsx';
import logo from './img/logo.svg';
import PropTypes from 'prop-types';
import {  Route, Switch } from 'react-router-dom';


export class Login extends React.Component{

    constructor (props){
        super(props);
    }
    render(){
        return (

            <section className="section-login" data-testid="section-login">
                <section className="left-section">
                    <img src={logo} alt="logo"/>
                </section>
                <section className="right-section">
                    <Switch>
                        <Route exact path="/" component={ LoginModalWithAuth }>
                            <LoginModalWithAuth />
                        </Route>
                        <Route path="/regModal" component={ RegModalWithAuth }>
                            <RegModalWithAuth />
                        </Route>                   
                    </Switch>
                </section>
            </section>
        )
    } 
}

export const LoginWithAuth = Login;

Login.propTypes = {
    pageTo: PropTypes.func,
} 