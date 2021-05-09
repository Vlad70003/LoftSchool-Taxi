import React from 'react';
import './Login.css'
import {LoginModalWithAuth} from './Elements/LoginModal/LoginModal.jsx';
import {RegModalWithAuth} from './Elements/RegModal/RegModal.jsx';
import logo from './img/logo.svg';
import PropTypes from 'prop-types';
import {withAuth} from '../../AuthContext';

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
            <section className="section-login">
                <section className="left-section">
                    <img src={logo} alt="logo"/>
                </section>
                <section className="right-section">
                    {this.state.currentPage === 'loginModal' && <LoginModalWithAuth navigateTo={this.navigateTo} />}
                    {this.state.currentPage === 'regModal' && <RegModalWithAuth navigateTo={this.navigateTo} />}
                    {this.state.currentPage === 'map'? this.props.pageTo('map'): console.error('ERROR')}
                </section>
            </section>
        )
    }
    
}

export let LoginWithAuth = withAuth(Login);

Login.propTypes = {
    pageTo: PropTypes.func
} 