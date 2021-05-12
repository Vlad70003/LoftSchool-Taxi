import React from 'react';
import './Map.css';
import logo from './img/logo.svg';
import {MapSection} from './Element/MapSection.jsx';
import PropTypes from 'prop-types';
import {withAuth} from '../../AuthContext';

export class Map extends React.Component {
    render(){
        return(
            <section className="map">
                <header className="header">
                    <img src={logo} alt="logo"/>
                    <nav className="navigation">
                        <a href="" className="nav-link">Карта</a>
                        <a href="" className="nav-link">Профиль</a>
                        <a href="" className="nav-link" onClick={() => this.props.pageTo('loginWindow')}>Выйти</a>
                    </nav>
                </header>
                <section className="main">
                    <MapSection />
                </section>
            </section>
            
        )
    }
}

export let MapWithAuth = withAuth(Map);

Map.propTypes = {
    pageTo: PropTypes.func  
}