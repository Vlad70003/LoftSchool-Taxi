import React from 'react';
import {Login} from './Component/Login/Login.jsx';
import {Map} from './Component/Map/Map.jsx';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      currentPage: 'login'
    }
  }

  pageTo = (page) => {
    this.setState({currentPage: page})
  }

  render(){
    return (
      <section className="mapSection">
        {this.state.currentPage === 'map' && <Map pageTo={this.pageTo} />}
        
        {this.state.currentPage === 'login' && <Login pageTo={this.pageTo} />}
      </section>
    )
  }
}

export default App;
