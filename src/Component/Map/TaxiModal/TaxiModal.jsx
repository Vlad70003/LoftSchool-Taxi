import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRoute } from '../../../actions';
import './style.css';
import bmw  from '../img/bmw-pic.svg';
import tesla from '../img/tesla-pic.svg';
import marsedes from '../img/mrs-pic.svg';
import arrowDown from '../img/arrow-down.svg';

let storage = localStorage;
let addressList = JSON.parse(storage.getItem('addressList'));

class TaxiModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstAddress: '',
            secondAddress: '',
        }
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

    addressList = (event, address) => {
        let target = event.target;
        let currentTarget = event.currentTarget;
        let isOpen = currentTarget.querySelector('.open');       
        
        if(currentTarget){  
            //Закрытие модального окна при повторном клике     
            if(isOpen){
                if(target.classList.contains('element')){
                    let element = target.parentNode;
                    if(element.classList.contains('first-path')){
                        this.setState({firstAddress: target.innerHTML})
                    } else if(element.classList.contains('second-path')){
                        this.setState({secondAddress: target.innerHTML})
                    }
                }
                isOpen.innerHTML = '';
                isOpen.classList.remove('open');
            }else{
                ///Если открытых окон нет, то при клике на input - открывает модалку
                if(target.classList.contains("path__input") || target.classList.contains("arrow-down")){
                    let addressListModal = target.closest('.path__wrapper').firstChild;

                    if(addressListModal.classList.contains('first-path')){
                        for(let i = 0; i < address.length; i++){
                            if(address[i] !== this.state.secondAddress){
                                let element = document.createElement("div");
                                element.classList.add('element');
                                element.textContent = address[i];
                                addressListModal.classList.add('open');
                                addressListModal.append(element);
                            }
                        }
                    }else if (addressListModal.classList.contains('second-path')){
                        for(let i = 0; i < address.length; i++){
                            if(address[i] !== this.state.firstAddress){
                                let element = document.createElement("div");
                                element.classList.add('element');
                                element.textContent = address[i];
                                addressListModal.classList.add('open');
                                addressListModal.append(element);
                            }
                        }
                    }                   
                }
            }           
        }
    }

    handleReadyRoute = async(event) => {
        event.preventDefault();
        let target = event.target;
        if(this.props.newOrder){
            this.props.setNewOrder(false);
        }
        if(this.state.firstAddress !== '' && this.state.secondAddress !== ''){
            this.props.loadRoute( this.state.firstAddress, this.state.secondAddress);
            this.props.setRouteBuild(true);
            this.props.setEventProfile(false);

        } else{
            let error = target.closest('.modal-wrapper').firstChild;
            error.style.opacity = 1;
        }
    }

    render(){
        return(
            <div className="modal-wrapper" onClick={(event) => this.addressList(event, this.props.adressList == '' ? addressList : this.props.adressList)}>
                <div className="error-message error__taxi-modal">Выберите начальную и конечную точку!*</div>
                <div className="path">
                   <div className="path__wrapper">
                       <span className="path__list first-path">

                       </span>
                       <input type="text" placeholder='Откуда' className="path__input" value={this.state.firstAddress} />
                       <img src={arrowDown} alt="arrowDown" srcset="" className="arrow-down"/>
                    </div>
                   <div className="path__wrapper">
                        <span className="path__list second-path">
                            
                        </span>
                        <input type="text" placeholder='Куда' className="path__input" value={this.state.secondAddress}/>
                        <img src={arrowDown} alt="arrowDown" srcset="" className="arrow-down" />
                    </div>
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
                        <button className="button" onClick={this.handleReadyRoute}>Заказать</button>
                    </div>
                </ul>
                
            </div>
        )
    }
}
export const AuthTaxiModal = connect(
    state => ({adressList: state.adressList}),
    { loadRoute }
)(TaxiModal)