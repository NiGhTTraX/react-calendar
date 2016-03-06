import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import sinon from 'sinon';
import ReactTestUtils from 'react-addons-test-utils';
import headerFactory from '../../../../src/components/header.jsx';
import { render } from '../../../helpers/rendering.js';

const Header = headerFactory();


describe('Header', function() {
  describe('Month view', function() {
    const date = new Date('February 14, 2016 6:30:15');
    const onNextSpy = sinon.spy();
    const onPrevSpy = sinon.spy();

    let $component;

    beforeEach(function() {
      const component = render(<Header
        date={date}
        onNext={onNextSpy} onPrev={onPrevSpy}
      />, this.container);

      $component = $(ReactDOM.findDOMNode(component));
    });

    it('should render the month', function() {
      expect($component.find('.current-month').text()).to.equal('February');
    });

    it('should call when clicking on the next button', function() {
      ReactTestUtils.Simulate.click($component.find('.next')[0]);

      expect(onNextSpy).to.have.been.calledOnce;
    });

    it('should call when clicking on the prev button', function() {
      ReactTestUtils.Simulate.click($component.find('.prev')[0]);

      expect(onPrevSpy).to.have.been.calledOnce;
    });
  });
});
