import path from 'path';

const ROOT_DIR = path.join(__dirname, '..', '..');

export default {
  entry: path.join(ROOT_DIR, 'tools', 'playground', 'index.js'),

  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devtool: 'eval',

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
