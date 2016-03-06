import React from 'react';
import ReactDOM from 'react-dom';
import calendarFactory from '../../../../calendar.jsx';
import { fakeComponentFactory } from '../../../helpers/chai-react.js';
import { render } from '../../../helpers/rendering.js';

const FakeHeader = fakeComponentFactory({ name: 'Header' });
const Calendar = calendarFactory(FakeHeader);

const ONE_WEEK = 7 * 24 * 3600 * 1000;


describe('Calendar', function() {
  describe('Month view', function() {
    const date = new Date('February 14, 2016 6:30:15');

    let component;

    beforeEach(function() {
      FakeHeader.reset();

      component = render(<Calendar date={date} />);
    });

    it('should render the header', function() {
      expect(FakeHeader).to.have.been.renderedWith({
        date,
        onNext: component.onNext,
        onPrev: component.onPrev
      });
    });

    it('should add a month to the date when moving forward', function() {
      component.onNext();

      expect(FakeHeader).to.have.been.renderedWith({
        date: new Date(date.getTime() + ONE_WEEK)
      });
    });

    it('should subtract a month to the date when moving back', function() {
      component.onPrev();

      expect(FakeHeader).to.have.been.renderedWith({
        date: new Date(date.getTime() - ONE_WEEK)
      });
    });
  });
});
