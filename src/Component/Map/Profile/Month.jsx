import React from "react";
import "./style/Month.css";
import { connect } from 'react-redux';

class Month extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "01"
    };
  }

  setMonth = (month) => {
    this.setState({ month: month });
  };
  returnMonth = (modal, month) => {
    this.props.setMonth(month);
    this.props.click(modal);
  };

  render() {
    return (
        <section className="data-modal__section">
            <div className="data-modal__wrapper">
                <header className="header__date">
                    <div className="header__year">{this.props.year}</div>
                    <div className="header__month">{this.props.month}</div>
                </header>
                <section className="month-section">
                    <ul className="list__month">
                        <span className="column">
                            <li className="element__month" onClick={() => this.returnMonth('no-modal', '1')}>JAN</li>
                            <li className="element__month" onClick={() => this.returnMonth('no-modal', '2')}>FEB</li>
                            <li className="element__month" onClick={() => this.returnMonth('no-modal', '3')}>MAR</li>
                        </span>
                        <span className="column">
                            <li className="element__month" onClick={() => this.returnMonth('no-modal', '4')}>APR</li>
                            <li className="element__month" onClick={() => this.returnMonth('no-modal', '5')}>MAY</li>
                            <li className="element__month" onClick={() => this.returnMonth('no-modal', '6')}>JUN</li>
                        </span>
                        <span className="column">
                            <li className="element__month" onClick={() => this.returnMonth('no-modal', '7')}>JUL</li>
                            <li className="element__month" onClick={() => this.returnMonth('no-modal', '8')}>AUG</li>
                            <li className="element__month" onClick={() => this.returnMonth('no-modal', '9')}>SEP</li>
                        </span>
                        <span className="column">
                            <li className="element__month" onClick={() => this.returnMonth('no-modal', '10')}>OCT</li>
                            <li className="element__month" onClick={() => this.returnMonth('no-modal', '11')}>NOV</li>
                            <li className="element__month" onClick={() => this.returnMonth('no-modal', '12')}>DEC</li>
                        </span>         
                    </ul>
                </section>
                <div className="buttons-wrapper">
                    <button className="year__button" onClick={() => this.returnMonth('no-modal', '1')}>Cancel</button>
                </div>
            </div>
        </section> 
    );
  }
}

export const AuthMonth = connect(
    state => ({isLoggedIn: state.isLoggedIn, userCard: state.userCard}),
    null
  )(Month)