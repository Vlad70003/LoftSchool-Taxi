import React from 'react';
import './Login.css'
import {LoginModalWithAuth} from './LoginModal/LoginModal.jsx';
import {RegModalWithAuth} from './RegModal/RegModal.jsx';
import logo from './img/logo.svg';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';


export class Login extends React.Component{

    constructor (props){
        super(props);
        this.state = {
             currentPage: 'loginModal'
        }
    }
    navigateTo = (page) => {
        this.setState({currentPage: page})
      }


    render(){
        return (

            <section className="section-login" data-testid="section-login">
                <section className="left-section">
                    <img src={logo} alt="logo"/>
                </section>
                <section className="right-section">
                    {this.state.currentPage === 'loginModal' && <LoginModalWithAuth navigateTo={this.navigateTo} pageTo = {this.props.pageTo} />}
                    {this.state.currentPage === 'regModal' && <RegModalWithAuth navigateTo={this.navigateTo} />}
                </section>
            </section>
        )
    } 
}

export const LoginWithAuth = Login;

Login.propTypes = {
    pageTo: PropTypes.func,
} 