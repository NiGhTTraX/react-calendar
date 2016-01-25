module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],

    files: [
      './setup.js',
      './components/**/*.spec.js'
    ],

    preprocessors: {
      './setup.js': ['webpack', 'sourcemap'],
      './components/**/*.spec.js': ['webpack', 'sourcemap'],
    },

    webpack: require('../../webpack.base.js'),

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
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true
  });
};
