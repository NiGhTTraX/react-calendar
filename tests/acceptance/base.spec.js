import chai from 'chai';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import calendarFactory from '../../calendar.jsx';

const expect = chai.expect;

const Calendar = calendarFactory();


describe('Calendar', function() {
  let component, $component;

  beforeEach(function() {
    component = ReactDOM.render(<Calendar/>, this.container);
    $component = $(ReactDOM.findDOMNode(component));
  });

  it('should render unfinished stuff', function() {
    expect($component.text()).to.contain('WIP');
  });
});
