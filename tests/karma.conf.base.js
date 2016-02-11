'use strict';
const path = require('path');

const helpersEntry = path.join(__dirname, 'helpers', 'index.js');


module.exports = {
  frameworks: ['mocha', 'chai'],

  files: [
    helpersEntry
  ],

  preprocessors: {
    [helpersEntry]: ['webpack', 'sourcemap']
  },

  webpack: require('../webpack.base.js'),

  webpackMiddleware: {
    noInfo: true
  },

  reporters: [
    'progress'
  ],

  browsers: [
    'Chrome'
  ],

  colors: true,
  port: 9876,
  autoWatch: false,
  singleRun: true
};
