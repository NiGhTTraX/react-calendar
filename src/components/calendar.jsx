import React, { Component } from 'react';
import './calendar.less';

export default function calendarFactory() {
  return class Calendar extends Component {
    render() {
      return <div className="calendar">Calendar WIP</div>;
    }
  };
}
