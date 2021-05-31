import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

class Date extends React.Component{
    render() {
        return ReactDom.createPortal(this.props.children, this.props.domNode)
    }
}

class DateModal extends React.Component {
    render(){
        return(
            <p>dfffdsssssssssssssssssssssssssssssssssdf</p>
        )
    }
}

export const AuthDateModal = connect(
    
)(DateModal)