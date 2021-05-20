import React from 'react';
import './Profile.css';
import logo from '../img/logo-card.svg';
import decoration from '../img/decor-card-first.svg';
import ReactDom from 'react-dom';

class ModalProfile extends React.Component{
    render() {
        return ReactDom.createPortal(this.props.children, this.props.domNode)
    }
}

export class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: "00/00",
            number: "0000 0000 0000 0000",
            name: '',
            cvc: '',


        }
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.placeholder = this.placeholder.bind(this);
    }
    handleChangeNumber(event){
        if(event.target.value.length > 0){
            this.setState({number: event.target.value});
        }else{
            this.setState({number: "0000 0000 0000 0000"});
        }
    }

    handleChangeDate(event){
        if(event.target.value.length > 0){
            this.setState({date: event.target.value});
        }else{
            this.setState({date: "00/00"});
        }       
    }
    handleName = (event) => {
        this.setState({name: event.target.value});
    }
    handleCvc = (event) => {
        this.setState({cvc: event.target.value});
    }
    placeholder(placeholder){
       return placeholder.length == 0 ? "00/00" : placeholder;
    }
    saveCard = (event) => {
        event.preventDefault();
        this.props.cardregistration( this.state.number, this.state.date, this.state.name, this.state.cvc);
    }

    render(){
        return(
            <ModalProfile domNode={document.querySelector("#modal")}>
                <section className="profile">
                <div className="profile__wrap">
                    <h3 className="title title-profile">Профиль</h3>
                    <p className="desc">Введите платежные данные</p>
                    <form className="card" onSubmit={this.saveCard}>
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
                    </form>
                    <button className="button btn-profile">Сохранить</button>
                </div>
            </section>
            </ModalProfile>           
        )
    }
}