import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class TaxiModalSuccess extends Component {
    render(){
        return(
            <div className="modal-wrapper taxi-modal__succ">
                <h3 className="title title-sizing">Заказ размещен</h3>
                <p className="desc desc__no-margin">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
                    <button className="button" onClick={() => this.props.setRouteBuild()}>Сделать новый заказ</button>
            </div>
        )
    }
}