var path = require('path'); // eslint-disable-line no-var


module.exports = {
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'build/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devtool: 'sourcemap',

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      loader: 'style!css!less'
    }]
  }
};
