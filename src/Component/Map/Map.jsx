import React from 'react';
import './Map.css';
import logo from './img/logo.svg';
import  MapSectionAuth  from './MapSection.jsx';
import { AuthProfile } from './Profile/Profile.jsx';
import { ProfileSuccessAuth } from './Profile/ProfileSuccess.jsx';
import { AuthTaxiModal } from './TaxiModal/TaxiModal';
import { TaxiModalSuccess } from './TaxiModal/TaxiModalComplated';
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
        }
    }

    logOut = (event) => {
        event.preventDefault();
        this.props.logOut();

    }

    setRouteBuild = () => {
        this.setState({routeBuilt: !this.state.routeBuilt});
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
                            <MapSectionAuth />                          
                        </PrivateRoute>
                        <PrivateRoute exact path="/" >
                            { !this.state.routeBuilt && <AuthTaxiModal setRouteBuild={this.setRouteBuild}/> }
                            { this.state.routeBuilt && <TaxiModalSuccess setRouteBuild={this.setRouteBuild}/> }
                        </PrivateRoute>
                        <PrivateRoute path="/profileModal" >
                            {!this.props.saveCard && <AuthProfile /> }
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