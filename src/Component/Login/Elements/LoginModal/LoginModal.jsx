import React from 'react';
import './LoginModal.css';
import PropTypes from 'prop-types';
import {withAuth} from '../../../../AuthContext';

export class LoginModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.logIn( this.state.email, this.state.password);
    }
    handleChangeEmail(event){
        this.setState({email: event.target.value});
    }
    handleChangePassword(event){
        this.setState({password: event.target.value});
    }


    render(){
        return(
            <div className="modal-login">
                    <h4 className="title">Войти</h4>
                    <form action="" className="form" onSubmit={this.handleSubmit} data-testid="form-test">
                        <label htmlFor="email" >Имя пользователя*</label>
                        <input type="email" name="email" id="email" placeholder="mail@mail.com" className="input" value={this.state.email} onChange={this.handleChangeEmail} data-testid="form-input" />
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name="password" id="password" placeholder="Пароль*" className="input" value={this.state.password} onChange={this.handleChangePassword} />
                        <input type="submit" value="Отправить" className="button" onClick={() => this.props.pageTo('map')} />
                        <div className="new-user">
                            <label htmlFor="reg" className="new-user__label">Новый пользователь?</label>
                            <a className="reg-link" name="reg" id="reg" onClick={() => this.props.navigateTo('regModal')}>Регистрация</a>
                        </div>                      
                    </form>
                </div>
        )

    }
}

export const LoginModalWithAuth = withAuth(LoginModal);

LoginModal.propTypes = {
    navigateTo: PropTypes.func,
    pageTo: PropTypes.func,
}