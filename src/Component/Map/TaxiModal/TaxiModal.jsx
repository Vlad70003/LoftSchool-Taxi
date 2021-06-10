import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TaxiModal.css';
import bmw  from '../img/bmw-pic.svg';
import tesla from '../img/tesla-pic.svg';
import marsedes from '../img/mrs-pic.svg';

class TaxiModal extends Component{
    constructor(props){
        super(props);
    }

    createOptions = (address) => {
        let addressList = [];
        for(let i = 0; i < address.length; i++){
            addressList.push(<option value={address[i]} className="option">{address[i]}</option>)
        }
        return addressList;
    } 
    checkedCard = (event) => {
        let target = event.target;
        let parentTarget = target.closest('.class-taxi__item');
        let wrapper = target.closest('.class-taxi__item-wrapper').children;

        for (let child of wrapper){
            if( child !== target){
                child.classList.remove('checked');
            }
        }
        parentTarget.classList.add('checked');
    }

    render(){
        return(
            <div className="modal-wrapper" >
                <div className="path">
                   <input type="text" placeholder='Откуда' className="path__input"/>
                   <input type="text" placeholder='Куда' className="path__input"/>
                </div>
                <ul className="class-taxi__list">
                    <div className="class-taxi__item-wrapper">
                        <li className="class-taxi__item checked" onClick={this.checkedCard}>
                            <div className="item__class">Стандарт</div>
                            <div className="item__desc">Стоимость</div>
                            <div className="item__price">150 Р</div>
                            <img className="item__img img-cor" src={bmw} alt="car1" />
                        </li>
                        <li className="class-taxi__item" onClick={this.checkedCard}>
                            <div className="item__class">Премиум</div>
                            <div className="item__desc">Стоимость</div>
                            <div className="item__price">250 Р</div>
                            <img className="item__img" src={tesla} alt="tesla" />
                        </li>
                        <li className="class-taxi__item" onClick={this.checkedCard}>
                            <div className="item__class">Бизнес</div>
                            <div className="item__desc">Стоимость</div>
                            <div className="item__price">300 Р</div>
                            <img className="item__img" src={marsedes} alt="marsedes" />
                        </li>
                    </div>
                    <div className="button__wrapper">
                        <button className="button">Заказать</button>
                    </div>
                </ul>
                
            </div>
        )
    }
}
export const AuthTaxiModal = connect(
    state => ({adressList: state.adressList}),
    null
)(TaxiModal)