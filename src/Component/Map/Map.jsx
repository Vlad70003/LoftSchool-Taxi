import React from 'react';
import './Map.css';
import logo from './img/logo.svg';
import {MapSection} from './MapSection.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../../actions';
import { Profile } from './Profile/Profile';
import { Link, Route, Router, Switch } from 'react-router-dom';


export class Map extends React.Component {

    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    logOut(event){
        event.preventDefault();
        this.props.pageTo('loginWindow');
        this.props.logOut();
    }



    render(){
        return(
            <section className="map">
                <header className="header">
                    <img src={logo} alt="logo"/>
                    <nav className="navigation">
                        <Link className="nav-link" to="/">Карта</Link>
                        <Link className="nav-link" to="/profile">Профиль</Link>
                        <a href="" className="nav-link" onClick={this.logOut}>Выйти</a>
                    </nav>
                </header>
                <section className="main">
                    <Switch>
                        <Route exact path="/" component={MapSection} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </section>
            </section>
            
        )
    }
}

export let MapWithAuth = connect(
    state => ({isLoggedIn: state.isLoggedIn}),
    {logOut}
)(Map);

Map.propTypes = {
    pageTo: PropTypes.func  
}