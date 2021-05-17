import React from 'react';
import './Profile.css';

export class Profile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="profile">
                <div className="profile__wrap">
                    <a href="#close" title="Закрыть" className="close">X</a>
                    <h3 className="title title-profile">Профиль</h3>
                    <p className="desc">Введите платежные данные</p>
                    <form className="card">
                        <div className="card__inf">                           
                            <div className="card__input">
                                <label htmlFor="name" className="label">Имя владельца</label>
                                <input type="text" name="name" className="input" id="name" placeholder="Имя владельца*"/>
                            </div>
                            <div className="card__input">
                                <label htmlFor="card-number" className="label">Номер карты</label>
                                <input type="text" name="card-number" className="input" id="card-number" placeholder="Номер владельца карты*"/>
                            </div>
                            <div className="card__edditions-inf">
                                <div className="date">
                                    <label htmlFor="date" className="label">MM/YY</label>
                                    <input type="text" name="date" className="input" id="name" placeholder="MM/YY*" />
                                </div>
                                <div className="cvc">
                                    <label htmlFor="cvc" className="label">CVC</label>
                                    <input type="text" name="cvc" className="input" id="name" placeholder="CVC*" />
                                </div>
                                </div>
                        </div>
                        <div className="card__rew">
                            <div className="card__rew-inf">

                            </div>
                        </div>
                    </form>
                    <button className="button btn-profile">Сохранить</button>
                </div>
            </section>
        )
    }
}