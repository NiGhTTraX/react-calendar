/**
 * @fileoverview Test helpers for mounting/unmounting components.
 *
 * This module has side effects.
 */

import ReactDOM from 'react-dom';

before(function() {
  // Set up a container for mounting components.
  let container = document.getElementById('test-area');

  if (!container) {
    container = document.createElement('div');
  }

  this.container = container;
});

afterEach(function() {
  // Clean up the component after each test.
  ReactDOM.unmountComponentAtNode(this.container);
});
