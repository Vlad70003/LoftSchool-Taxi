import { render } from '@testing-library/react';
import React from 'react';
import './LoginModal.css';

export const LoginModal = () => {
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
                            <button className="reg-link" name="reg" id="reg">Регистрация</button>
                        </div>
                        
                    </form>
                </div>
        )
}