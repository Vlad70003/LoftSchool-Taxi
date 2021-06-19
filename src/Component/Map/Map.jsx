import React from 'react';
import './Map.css';
import logo from './img/logo.svg';
import  MapSectionAuth  from './MapSection.jsx';
import { AuthProfile } from './Profile/Profile.jsx';
import { ProfileSuccessAuth } from './Profile/ProfileSuccess.jsx';
import { AuthTaxiModal } from './TaxiModal/TaxiModal';
import { AuthTaxiModalSuccess } from './TaxiModal/TaxiModalComplated';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../../actions';
import { Link } from 'react-router-dom';
import { PrivateRoute} from '../../PrivateRouter';

export class Map extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            routeBuilt: false,
            newOrder: false,
            eventProfile: false,
        }
    }

    logOut = (event) => {
        event.preventDefault();
        this.props.logOut();

    }

    setRouteBuild = (boolean) => {
        this.setState({routeBuilt: boolean});
    }

    setNewOrder = (boolean) => {
        this.setState({newOrder: boolean});
    }

    setEventProfile = (boolean) => {
        this.setState({eventProfile: boolean});
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
                        <PrivateRoute path="/" >
                            <MapSectionAuth newOrder={this.state.newOrder} eventProfile={this.state.eventProfile}/>
                        </PrivateRoute>
                        <PrivateRoute exact path="/" >
                            { !this.state.routeBuilt && <AuthTaxiModal setRouteBuild={this.setRouteBuild} setNewOrder={this.setNewOrder} newOrder={this.state.newOrder} setEventProfile={this.setEventProfile}/> }
                            { this.state.routeBuilt && <AuthTaxiModalSuccess setRouteBuild={this.setRouteBuild} setNewOrder={this.setNewOrder}/> }
                        </PrivateRoute>
                        <PrivateRoute path="/profileModal" >
                            {!this.props.saveCard && <AuthProfile setEventProfile={this.setEventProfile}/> }
                            {this.props.saveCard && <ProfileSuccessAuth /> }
                        </PrivateRoute>
                </section>
            </section>
            
        )
    }
}

export let MapWithAuth = connect(
    state => ({isLoggedIn: state.isLoggedIn, saveCard: state.saveCard}),
    {logOut}
)(Map);

Map.propTypes = {
    pageTo: PropTypes.func  
}