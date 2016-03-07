import React from 'react';
import calendarFactory from '../../../../calendar.jsx';
import { fakeComponentFactory } from '../../../helpers/chai-react.js';
import { render } from '../../../helpers/rendering.js';

const FakeHeader = fakeComponentFactory({ name: 'Header' });
const Calendar = calendarFactory(FakeHeader);

const ONE_WEEK = 7 * 24 * 3600 * 1000;


describe('Calendar', function() {
  describe('Month view', function() {
    const date = new Date('February 14, 2016 6:30:15');

    beforeEach(function() {
      FakeHeader.reset();

      render(<Calendar date={date} />);
    });

    it('should render the header', function() {
      expect(FakeHeader).to.have.been.renderedWith({
        date
      });
    });

    it('should add a month to the date when moving forward', function() {
      FakeHeader.props.onNext();

      expect(FakeHeader).to.have.been.renderedWith({
        date: new Date(date.getTime() + ONE_WEEK)
      });
    });

    it('should subtract a month to the date when moving back', function() {
      FakeHeader.props.onPrev();

      expect(FakeHeader).to.have.been.renderedWith({
        date: new Date(date.getTime() - ONE_WEEK)
      });
    });
  });
});
