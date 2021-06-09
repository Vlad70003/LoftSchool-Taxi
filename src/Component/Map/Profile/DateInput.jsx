import React, { Component } from 'react';
import './style/DateInput.css'

export class DateInput extends Component{
    
    render(){
        return (
            <div contentEditable='true' data-text="ММ/ГГ" className="date-input" onClick={() => this.props.click("modal-year")}>{this.props.fullDate(this.props.month, this.props.year)}</div>
        )
    }
}
