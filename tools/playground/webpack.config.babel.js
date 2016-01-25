import path from 'path';
import _ from 'lodash';
import baseConfig from '../../webpack.base.js';

const ROOT_DIR = path.join(__dirname, '..', '..');

export default _.merge(baseConfig, {
  entry: path.join(ROOT_DIR, 'tools', 'playground', 'index.js'),

  output: {
    filename: 'bundle.js',
    path: __dirname
  }
});
