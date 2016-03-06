/**
 * @fileoverview
 * Fail tests when prop validation fails.
 */

const PROP_TYPES_ERROR_PATTERN = /Failed propType/;


const error = console.error;

console.error = (msg, ...args) => {
  if (PROP_TYPES_ERROR_PATTERN.test(msg)) {
    throw new Error(msg);
  }

  error(msg, ...args);
};
