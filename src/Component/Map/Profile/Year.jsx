import React from "react";
import "./style/Year.css";
import { connect } from 'react-redux';

class Year extends React.Component {
  constructor(props) {
    super(props);

  }

  returnYear = (modal, year) => {
    this.props.setYear(this.currentYear(year));
    this.props.click(modal);
  };
  currentYear = (addYear) => { 
    let currentDate = new Date()
    return currentDate.getFullYear() + addYear , currentDate.getFullYear() + addYear;
  }

  render() {
    return (
      <section className="data-modal__section">
        <div className="data-modal__wrapper">
          <header className="header__date">
            <div className="header__year">{this.props.year == '' ? '2021' : this.props.year}</div>
            <div className="header__month">{this.props.month == '' ? '01' : this.props.month}</div>
          </header>
          <ul className="list__year">
            <li className="element-year" onClick={() => this.returnYear('modal-month', 0)}>{this.currentYear(0)} </li>
            <li className="element-year" onClick={() => this.returnYear('modal-month', 1)}>{this.currentYear(1)} </li>
            <li className="element-year" onClick={() => this.returnYear('modal-month', 2)}>{this.currentYear(2)} </li>
            <li className="element-year" onClick={() => this.returnYear('modal-month', 3)}>{this.currentYear(3)} </li>
            <li className="element-year" onClick={() => this.returnYear('modal-month', 4)}>{this.currentYear(4)} </li>
            <li className="element-year" onClick={() => this.returnYear('modal-month', 5)}>{this.currentYear(5)} </li>
            <li className="element-year" onClick={() => this.returnYear('modal-month', 6)}>{this.currentYear(6)} </li>
            <li className="element-year" onClick={() => this.returnYear('modal-month', 7)}>{this.currentYear(7)} </li>
            <li className="element-year" onClick={() => this.returnYear('modal-month', 8)}>{this.currentYear(8)} </li>
            <li className="element-year" onClick={() => this.returnYear('modal-month', 9)}>{this.currentYear(9)} </li>
            <li className="element-year" onClick={() => this.returnYear('modal-month', 10)}>{this.currentYear(10)} </li>
          </ul>
          <div className="buttons-wrapper">
            <button className="year__button" onClick={() => this.returnYear('no-modal', 0)}>Cancel</button>
          </div>
          
        </div>
      </section>
    );
  }
}

export const AuthYear = connect(
  state => ({isLoggedIn: state.isLoggedIn, userCard: state.userCard}),
  null
)(Year)