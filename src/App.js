import React from 'react';
import {LoginWithAuth} from './Component/Login/Login.jsx';
import {MapWithAuth} from './Component/Map/Map.jsx';
import './App.css';
import {withAuth} from './AuthContext'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      currentPage: 'loginWindow',
    }
  }

  pageTo = (page) => {
    if(this.props.isLoggedIn){
      this.setState({currentPage: page})
    }else{
      this.setState({currentPage: 'loginWindow'})
    }  
  }

  render(){
    return (
      <section className="mapSection">
        {this.state.currentPage === 'map' && <MapWithAuth pageTo={this.pageTo}/>}       
        {this.state.currentPage === 'loginWindow' && <LoginWithAuth pageTo={this.pageTo} />}
      </section>
    )
  }
}

export default withAuth(App);
