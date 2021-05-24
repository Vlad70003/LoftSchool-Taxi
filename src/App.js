import React from 'react';
import {LoginWithAuth} from './Component/Login/Login.jsx';
import {MapWithAuth} from './Component/Map/Map.jsx';
import './App.css';
import { connect } from 'react-redux';
import { Link, Route, Router, Switch } from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  

  render(){
    return (
      <section className="mapSection">
          { !this.props.isLoggedIn && <LoginWithAuth  /> }
          { this.props.isLoggedIn && <MapWithAuth /> }
      </section>
    )
  }
}

export default connect(
	state => ({isLoggedIn: state.isLoggedIn}),
  null
)(App);
