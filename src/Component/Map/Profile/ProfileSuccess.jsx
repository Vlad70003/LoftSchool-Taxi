import React, { Component } from 'react';
import './ProfileSuccess.css';
import { Link } from 'react-router-dom';

export class ProfileSuccess extends Component {
    render(){
        return(
            <section className="profile-succ">
                <div className="profile-succ__wrap">
                    <h3 className="title title-profile-succ">Профиль</h3>
                    <p className="desc">Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
                    <Link className="button btn-profile btn-profile__succ" onClick={this.storage} to="/" >Перейти на карту</Link>                  
                </div>
            </section>
        )
    }
}