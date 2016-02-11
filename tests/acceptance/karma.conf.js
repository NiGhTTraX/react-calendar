'use strict';
const baseConfig = require('../karma.conf.base.js');


module.exports = function(config) {
  baseConfig.files.push(
    './**/*.spec.js'
  );

  baseConfig.preprocessors['./**/*.spec.js'] = ['webpack', 'sourcemap'];

  config.set(baseConfig);
};
