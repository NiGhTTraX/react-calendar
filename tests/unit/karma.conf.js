'use strict';
const baseConfig = require('../karma.conf.base.js');


module.exports = function(config) {
  baseConfig.files.push(
    './components/**/*.spec.js'
  );

  baseConfig.preprocessors['./components/**/*.spec.js'] = ['webpack', 'sourcemap'];

  config.set(baseConfig);
};
