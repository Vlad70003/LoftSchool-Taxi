import React from 'react';
import './LoginModal.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authenticate, loadAdressList } from '../../../actions';
import { Link } from 'react-router-dom';

export class LoginModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.authenticate( this.state.email, this.state.password);
        this.props.loadAdressList();
    }
    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
    }
    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    }

    render(){
        return(
            <div className="modal-login" data-testid="login-form">
                    <h4 className="title">Войти</h4>
                    <form action="" className="form" onSubmit={this.handleSubmit} data-testid="form">
                        <label htmlFor="email" >Имя пользователя*</label>
                        <input type="email" name="email" id="email" placeholder="mail@mail.com" className="input" value={this.state.email} onChange={this.handleChangeEmail} data-testid="form-input" />
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name="password" id="password" placeholder="Пароль*" className="input" value={this.state.password} onChange={this.handleChangePassword} />
                        <div className="error-message">Неверный логин или пароль!</div>
                        <input type="submit" value="Отправить" className="button" />
                        <div className="new-user">
                            <label htmlFor="reg" className="new-user__label">Новый пользователь?</label>
                            <Link className="reg-link" name="reg" id="reg" to="/regModal">Регистрация</Link>
                        </div>                 
                    </form>
                </div>
        )

    }
}

export const LoginModalWithAuth = connect(
    state => ({isLoggedIn: state.isLoggedIn}),
    { authenticate, loadAdressList }
)(LoginModal);

LoginModal.propTypes = {
    navigateTo: PropTypes.func,
    pageTo: PropTypes.func,
}