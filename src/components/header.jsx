import React, { Component } from 'react';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


export default function headerFactory() {
  return class Header extends Component {
    render() {
      return <div className="header">
        <span className="prev" onClick={this.props.onPrev}>&gt;</span>

        <span className="current-month">
          {MONTH_NAMES[this.props.date.getMonth()]}
        </span>

        <span className="next" onClick={this.props.onNext}>&gt;</span>
      </div>;
    }
  };
}
