import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import calendarFactory from '../../calendar.jsx';
import headerFactory from '../../src/components/header.jsx';
import { render } from '../helpers/rendering.js';


const Header = headerFactory();
const Calendar = calendarFactory(Header);


describe('Calendar', function() {
  describe('Month view', function() {
    const date = new Date('February 14, 2016 6:30:15');

    let component, $component;

    beforeEach(function() {
      component = render(<Calendar date={date}/>);
      $component = $(ReactDOM.findDOMNode(component));
    });

    it('should display the name of the current month', function() {
      expect($component.find('.current-month').text()).to.equal(
          'February');
    });

    it('should mark the current day', function() {
      expect($component.find('.current-day').text()).to.equal('14');
    });
  });
});
