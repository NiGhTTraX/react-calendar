import React, { Component, PropTypes } from 'react';
import './calendar.less';

const ONE_WEEK = 7 * 24 * 3600 * 1000;


export default function calendarFactory(Header) {
  return class Calendar extends Component {
    static propTypes = {
      date: PropTypes.instanceOf(Date).isRequired
    };

    constructor(props) {
      super(props);

      this.state = {
        currentDate: this.props.date
      };

      this.onNext = this.onNext.bind(this);
      this.onPrev = this.onPrev.bind(this);
    }

    render() {
      return <div className="calendar">
        <Header date={this.state.currentDate}
          onNext={this.onNext} onPrev={this.onPrev}
        />
      </div>;
    }

    onNext() {
      this.setState({
        currentDate: new Date(this.state.currentDate.getTime() + ONE_WEEK)
      });
    }

    onPrev() {
      this.setState({
        currentDate: new Date(this.state.currentDate.getTime() - ONE_WEEK)
      });
    }
  };
}
