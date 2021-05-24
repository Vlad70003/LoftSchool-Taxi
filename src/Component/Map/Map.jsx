import React from 'react';
import './Map.css';
import logo from './img/logo.svg';
import  MapSectionAuth  from './MapSection.jsx';
import { AuthProfile } from './Profile/Profile';
import { ProfileSuccess } from './Profile/ProfileSuccess';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../../actions';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { PrivateRoute} from '../../PrivateRouter'

export class Map extends React.Component {

    constructor(props){
        super(props);
    }
    logOut = (event) => {
        event.preventDefault();
        this.props.logOut();
    }



    render(){
        return(
            <section className="map">
                <header className="header">
                    <img src={logo} alt="logo"/>
                    <nav className="navigation">
                        <Link className="nav-link" to="/">Карта</Link>
                        <Link className="nav-link" to="/profileModal">Профиль</Link>
                        <Link className="nav-link" onClick={this.logOut}>Выйти</Link>
                    </nav>
                </header>
                <section className="main">
                    <Switch>
                        <PrivateRoute exact path="/" >
                            <MapSectionAuth />
                        </PrivateRoute>
                        {!this.props.saveCard && 
                        <PrivateRoute path="/profileModal" >
                            <MapSectionAuth />                            
                            <AuthProfile />
                        </PrivateRoute> 
                        }
                        {this.props.saveCard && 
                        <PrivateRoute path="/profileModal" >
                            <MapSectionAuth />                            
                            <ProfileSuccess />
                        </PrivateRoute> 
                        }
                                       
                    </Switch>
                </section>
            </section>
            
        )
    }
}

export let MapWithAuth = connect(
    state => ({isLoggedIn: state.isLoggedIn}, {saveCard: state.saveCard}),
    {logOut}
)(Map);

Map.propTypes = {
    pageTo: PropTypes.func  
}