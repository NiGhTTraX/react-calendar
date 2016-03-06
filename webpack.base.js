module.exports = {
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
