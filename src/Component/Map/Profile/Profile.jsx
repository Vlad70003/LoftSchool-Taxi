import React, { useEffect } from 'react';
import './style/Profile.css';
import logo from '../img/logo-card.svg';
import decoration from '../img/decor-card-first.svg';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { saveCard } from '../../../actions';
import { AuthMonth } from './Month';
import { AuthYear } from './Year';
import { DateInput } from './DateInput';
let storage = localStorage;
let userCard = JSON.parse(storage.getItem('userCard'))

class ModalProfile extends React.Component{
    render() {
        return ReactDom.createPortal(this.props.children, this.props.domNode)
    }
}

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            month: '',
            year: '',
            date: '',
            number: '',
            name: '',
            cvc: '',
            characterCount: 0,
            modal: 'no-modal',
        }
    }

    fullDate = (month, year) => {
        if(month == ''){
            return ''
        } else if(month !== ''){
            return `${month}/${year}` ;  
        }       
    }

    cardnumEnter = (e) => {
        if (e.keyCode !== 8 && e.keyCode !== 46) {
            let newValue = e.target.value.replace(/\D/g, "");
            newValue = newValue.replace(/(.{4})/g, "$1 ");
            e.target.value = newValue;
            this.setState({ number: e.target.value });
        }
        if(e.keyCode === 8) {
            this.setState({ number: e.target.value });
        }
    }

    setModal = (str) => {
        this.setState({ modalWindow: str });
      };

    setMonth = (number) => {
        let result = number < 10 ? `0${number}` : number;
        this.setState({ month: result });
      };
    setYear = (number) => {
        this.setState({ year: number });
    };

    handleName = (event) => {
        console.log(this.props.adressList)
        this.setState({name: event.target.value});
    }

    handleCvc = (event) => {
        this.setState({cvc: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({date: this.state.month/this.state.year})
        if( this.state.number.length == 20 && typeof this.state.name == 'string' && this.state.cvc.length == 3){
            this.props.saveCard( this.state.number, this.fullDate(this.state.month, this.state.year), this.state.name, this.state.cvc, this.state.token);
        }else{
            let error = document.querySelector('.error-profile');
            error.style.opacity = 1;
        }
       
    }

    render(){
        return(
            <section className="modal-section">
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
                                            <input type="text" placeholder="Номер карты*" name="card-number" value={this.state.number} className="input" id="card-number" onChange={this.cardnumEnter} maxLength="19"/>
                                        </div>
                                        <div className="card__edditions-inf">
                                            <div className="date">
                                                <label htmlFor="date" className="label">MM/YY</label>
                                                <DateInput month={this.state.month} year={this.state.year} click={this.setModal} fullDate={this.fullDate}/>
                                            </div>
                                            <div className="cvc">
                                                <label htmlFor="cvc" className="label">CVC</label>
                                                <input type="text" placeholder="CVC*" name="cvc" className="input" id="name" placeholder="CVC*" onChange={this.handleCvc} maxLength="3"/>
                                            </div>
                                            </div>
                                    </div>
                                    <div className="card__rew">
                                    <div className="error-profile">Неверно указаны данные о карте!</div>
                                        <div className="card__rew-inf">
                                            <div className="card__rew-conteiner">
                                                <div className="card__rew-header">
                                                    <img src={logo} alt="logo" />
                                                    <div className="card__date">{ this.props.userCard.expiryDate == undefined ? this.fullDate(this.state.month, this.state.year) : this.props.userCard.expiryDate }</div>
                                                </div>
                                                <div className="card__number">{ this.props.userCard.cardNumber == undefined ? this.state.number : this.props.userCard.cardNumber }</div>
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

                                <input type="submit" value='Сохранить' className="button btn-profile"></input>
                            </form>                   
                        </div>
                    </section>
                </ModalProfile>
                {this.state.modalWindow === "modal-year" && (<AuthYear setYear={this.setYear}  year={this.state.year} month={this.state.month} click={this.setModal} />)}
                {this.state.modalWindow === "modal-month" && (<AuthMonth setMonth={this.setMonth} year={this.state.year} month={this.state.month} click={this.setModal} />)}
            </section>                      
        )
    }
}

export const AuthProfile = connect(
    state => ({isLoggedIn: state.isLoggedIn, saveCard: state.saveCard, userCard: state.userCard }),
    { saveCard }
)(Profile)