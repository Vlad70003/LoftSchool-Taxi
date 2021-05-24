import React, { useEffect } from 'react';
import './Profile.css';
import logo from '../img/logo-card.svg';
import decoration from '../img/decor-card-first.svg';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { saveCard } from '../../../actions';
import { Link } from 'react-router-dom';

class ModalProfile extends React.Component{
    render() {
        return ReactDom.createPortal(this.props.children, this.props.domNode)
    }
}

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: "",
            number: "",
            name: '',
            cvc: '',
            token: 'AUTH_TOKEN',


        }
    }
    handleChangeNumber = (event) => {
        (event.target.value.length > 0) ? this.setState({number: event.target.value}) : this.setState({number: "0000 0000 0000 0000"});
    }

    handleChangeDate = (event) => {
        (event.target.value.length > 0) ? this.setState({date: event.target.value}) : this.setState({date: "00/00"})  
    }
    handleName = (event) => {
        this.setState({name: event.target.value});
    }
    handleCvc = (event) => {
        this.setState({cvc: event.target.value});
    }
    placeholder = (placeholder) => {
       return placeholder.length == 0 ? "00/00" : placeholder;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveCard( this.state.number, this.state.date, this.state.name, this.state.cvc, this.state.token);
    }

    render(){
        return(
            <ModalProfile domNode={document.querySelector("#modal")}>
                <section className="profile">
                <div className="profile__wrap">
                    <h3 className="title title-profile">Профиль</h3>
                    <p className="desc">Введите платежные данные</p>
                    <form className="card" onSubmit={this.handleSubmit}>
                        <div className="card__wrapper">
                            <div className="card__inf">
                                <div className="card__input">
                                    <label htmlFor="name" className="label">Имя владельца</label>
                                    <input type="text" name="name" className="input" id="name" placeholder="Имя владельца*" onChange={this.handleName}/>
                                </div>
                                <div className="card__input">
                                    <label htmlFor="card-number" className="label">Номер карты</label>
                                    <input type="text" name="card-number" className="input" id="card-number" placeholder={this.placeholder(this.state.number)} onChange={this.handleChangeNumber}/>
                                </div>
                                <div className="card__edditions-inf">
                                    <div className="date">
                                        <label htmlFor="date" className="label">MM/YY</label>
                                        <input type="text" name="date" className="input" id="name" placeholder={this.placeholder(this.state.date)} onChange={this.handleChangeDate} />
                                    </div>
                                    <div className="cvc">
                                        <label htmlFor="cvc" className="label">CVC</label>
                                        <input type="text" name="cvc" className="input" id="name" placeholder="CVC*" onChange={this.handleCvc}/>
                                    </div>
                                    </div>
                            </div>
                            <div className="card__rew">
                                <div className="card__rew-inf">
                                    <div className="card__rew-conteiner">
                                        <div className="card__rew-header">
                                            <img src={logo} alt="logo" />
                                            <div className="card__date">{this.state.date}</div>
                                        </div>
                                        <div className="card__number">{this.state.number}</div>
                                        <div className="card__footer">
                                            <img src={decoration} alt="decor" />
                                            <div className="second-decoration-card">
                                                <div className="ellipse-one"></div>
                                                <div className="ellipse-two"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value='Сохранить' className="button btn-profile" />                     
                    </form>
                    
                </div>
            </section>
            </ModalProfile>           
        )
    }
}

export const AuthProfile = connect(
    state => ({isLoggedIn: state.isLoggedIn}),
    { saveCard }
)(Profile)