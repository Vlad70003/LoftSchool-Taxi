import React, { Component } from 'react';
import './TaxiModal.css';
import bmw  from '../img/bmw-pic.svg';
import tesla from '../img/tesla-pic.svg';
import marsedes from '../img/mrs-pic.svg';

export class TaxiModal extends Component{
    render(){
        return(
            <div className="modal-wrapper">
                <div className="path">
                    <select id="point">
                        <option value="Point 1">Point 1</option>
                        <option value="Point 2">Point 2</option>
                    </select>
                    <select id="point">
                        <option value="Point 1">Point 1</option>
                        <option value="Point 2">Point 2</option>
                    </select>
                </div>
                <ul className="class-taxi__list">
                    <div className="class-taxi__item-wrapper">
                        <li className="class-taxi__item">
                            <div className="item__class">Стандарт</div>
                            <div className="item__desc">Стоимость</div>
                            <div className="item__price">150 Р</div>
                            <img className="item__img img-cor" src={bmw} alt="car1" />
                        </li>
                        <li className="class-taxi__item">
                            <div className="item__class">Премиум</div>
                            <div className="item__desc">Стоимость</div>
                            <div className="item__price">250 Р</div>
                            <img className="item__img" src={tesla} alt="tesla" />
                        </li>
                        <li className="class-taxi__item">
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