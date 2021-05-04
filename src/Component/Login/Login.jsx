import React from 'react';
import './Login.css'
import {LoginModal} from './Elements/LoginModal/LoginModal.jsx';
import {RegModal} from './Elements/RegModal/RegModal.jsx';
import logo from './img/logo.svg'

export class Login extends React.Component{

    constructor (props){
        super(props);
        this.state = {
             currentPage: 'loginModal'
        }
    }
    navigateTo = (page) => {
        this.setState({currentPage: page})
      }
    
    

    render(){
        return (
            <section className="section-login">
                <section className="left-section">
                    <img src={logo} alt="logo"/>
                </section>
                <section className="right-section">
                    {this.state.currentPage === 'loginModal' && <LoginModal navigateTo={this.navigateTo} />}
                    {this.state.currentPage === 'regModal' && <RegModal navigateTo={this.navigateTo} />}
                    {this.state.currentPage === 'map'? this.props.pageTo('map'): console.error('ERROR')}
                </section>
            </section>
        )
    }
    
}