import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRoute } from '../../../actions';

class TaxiModalSuccess extends Component {

    handleReset = () => {
        this.props.setRouteBuild();
    }

    render(){
        return(
            <div className="modal-wrapper taxi-modal__succ">
                <h3 className="title title-sizing">Заказ размещен</h3>
                <p className="desc desc__no-margin">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
                    <button className="button" onClick={this.handleReset}>Сделать новый заказ</button>
            </div>
        )
    }
}

export const AuthTaxiModalSuccess = connect(
    null,
    { loadRoute }
)(TaxiModalSuccess)