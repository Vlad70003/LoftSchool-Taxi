import React from 'react';
import './LoginModal.css';
import {Login} from '../../Login';

export class LoginModal extends React.Component {

    render(){
        return(
            <div className="modal-login">
                    <h4 className="title">Войти</h4>
                    <form action="" className="form">
                        <label htmlFor="email">Имя пользователя*</label>
                        <input type="email" name="email" id="email" placeholder="mail@mail.com" className="input"/>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name="password" id="password" placeholder="Пароль*" className="input"/>
                        <button className="button">Войти</button>
                        <div className="new-user">
                            <label htmlFor="reg" className="new-user__label">Новый пользователь?</label>
                            <a className="reg-link" name="reg" id="reg" onClick={() => this.props.navigateTo('regModal')}>Регистрация</a>
                        </div>
                        
                    </form>
                </div>
        )

    }
}