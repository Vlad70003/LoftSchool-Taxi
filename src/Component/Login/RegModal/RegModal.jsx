import React from 'react';
import './RegModal.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registration } from '../../../actions';
import { Link } from 'react-router-dom';


export class RegModal extends React.Component {
constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
        userName: '',
        userSurname: '',
    }
}

    handleSubmit = (event) => {
        event.preventDefault();
        let target = event.currentTarget;
        let message = target.previousSibling.previousSibling;

        if(this.state.email == '' && this.state.password == '' && this.state.userName == '' && this.state.userSurname == ''){
            message.innerHTML = 'Заполните все поля!';
            message.style.color = 'red';
        } else{
            this.props.registration( this.state.email, this.state.password, this.state.userName, this.state.userSurname);
            message.innerHTML = 'Регистрация прошла успешно, теперь вы можете войти!';
            message.style.color = 'green';
        } 
    }
    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
    }
    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    }
    handleChangeUserName = (event) => {
        this.setState({userName: event.target.value});
    }
    handleChangeUserSurname = (event) => {
        this.setState({userSurname: event.target.value});
    }

    render(){
        return(
            <div className="modal-reg">
                    <div className="message"></div>
                    <h4 className="title">Регистрация</h4>
                    <form action="" className="form" data-testid="form" onSubmit={this.handleSubmit} >
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" id="email" placeholder="mail@mail.com" className="input" data-testid="form-input" onChange={this.handleChangeEmail} />
                        <div className="user-inf">
                            <div className="user-inf__name">
                                <label htmlFor="name">Имя</label>
                                <input type="text" name="name" placeholder="Имя*" onChange={this.handleChangeUserName}/>
                            </div>
                            <div className="user-inf__lastName">
                                <label htmlFor="lastName">Фамилия</label>
                                <input type="text" name="lastName" placeholder="Фамилия*" onChange={this.handleChangeUserSurname} />
                            </div>
                        </div>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name="password" id="password" placeholder="Пароль*" className="input" onChange={this.handleChangePassword}/>
                        <input type="submit" value="Зарегистрироваться" className="button" />
                        <div className="new-user">
                            <label htmlFor="reg" className="new-user__label">Уже зарегистрирован?</label>
                            <Link className="reg-link" name="reg" data-testid="content-input"  id="reg" to="/">Войти</Link>
                        </div>
                        
                    </form>
                </div>
        )
    }
}

export const RegModalWithAuth = connect(
    state => ({isLoggedIn: state.isLoggedIn}),
    { registration }
)(RegModal);

RegModal.propTypes = {
    navigateTo: PropTypes.func
}