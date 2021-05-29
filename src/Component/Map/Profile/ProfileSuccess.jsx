import React, { Component } from 'react';
import './ProfileSuccess.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveCardOut } from '../../../actions';


class ProfileSuccess extends Component {
    constructor(props){
        super(props);
    }

    saveCardOut = () => {
        this.props.saveCardOut();
    }

    render(){
        return(
            <section className="profile-succ">
                <div className="profile-succ__wrap">
                    <h3 className="title title-profile-succ">Профиль</h3>
                    <p className="desc">Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
                    <Link className="button btn-profile btn-profile__succ" to="/" onClick={this.saveCardOut}>Перейти на карту</Link>                  
                </div>
            </section>
        )
    }
}

export let ProfileSuccessAuth = connect(
    state => ({isLoggedIn: state.isLoggedIn}, {saveCard: state.saveCard}),
    { saveCardOut }
)(ProfileSuccess);