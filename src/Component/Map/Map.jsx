import React from 'react';
import './Map.css';
import logo from './img/logo.svg';



export class Map extends React.Component {
    render(){
        return(
            <section className="map">
                <header className="header">
                    <img src={logo} alt="logo"/>
                    <nav className="navigation">
                        <a href="" className="nav-link">Карта</a>
                        <a href="" className="nav-link">Профиль</a>
                        <a href="" className="nav-link" onClick={() => this.props.pageTo('login')}>Выйти</a>
                    </nav>
                </header>
                <section className="main">
                    
                </section>
            </section>
            
        )
    }
}