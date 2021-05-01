import React from 'react';
import './RegModal.css';

export const RegModal = () => {
        return(
            <div className="modal-reg">
                    <h4 className="title">Регистрация</h4>
                    <form action="" className="form">
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" id="email" placeholder="mail@mail.com" className="input"/>
                        <div className="user-inf">
                            <div className="user-inf__name">
                                <label htmlFor="name">Имя</label>
                                <input type="text" name="name" placeholder="Имя*"/>
                            </div>
                            <div className="user-inf__lastName">
                                <label htmlFor="lastName">Фамилия</label>
                                <input type="text" name="lastName" placeholder="Фамилия*"/>
                            </div>
                        </div>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name="password" id="password" placeholder="Пароль*" className="input"/>
                        <button className="button">Зарегистрироваться</button>
                        <div className="new-user">
                            <label htmlFor="reg" className="new-user__label">Уже зарегистрирован?</label>
                            <button className="reg-link" name="reg" id="reg">Войти</button>
                        </div>
                        
                    </form>
                </div>
        )
}