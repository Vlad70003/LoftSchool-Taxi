import React from 'react';
import {Login} from './Component/Login/Login'
import './App.css';

let PAGES = {
  login: <Login/>,
}

class App extends React.Component {

  state = { currentPage: 'login'}

  navigateTo = (page) => {
    this.state({currentPage: page})
  }

  render(){
    return (
      <div>{PAGES[this.state.currentPage]}</div>
    )
  }
}

export default App;
