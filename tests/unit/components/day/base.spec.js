import chai from 'chai';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import dayFactory from '../../../../src/components/day.jsx';

const expect = chai.expect;

const Day = dayFactory();

describe('Day', function() {
  let component, $component;

  beforeEach(function() {
    component = ReactDOM.render(<Day/>, this.container);
    $component = $(ReactDOM.findDOMNode(component));
  });

  it('should render unfinished stuff', function() {
    expect($component.text()).to.contain('WIP');
  });
});
