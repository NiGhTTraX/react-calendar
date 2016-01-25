import Calendar from '../../index.js';
import baseFixture from '../../tests/fixtures/components/calendar/base.js';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Calendar {...baseFixture} />,
                document.getElementById('root'));
