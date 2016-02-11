import baseConfig from '../../webpack.base.js';
import path from 'path';


export default Object.assign({}, baseConfig, {
  entry: path.join(__dirname, 'index.js'),

  output: {
    filename: 'acceptance.js',
    path: path.join(__dirname, '..', '..', 'build')
  }
});
