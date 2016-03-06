import baseConfig from '../../webpack.base.js';
import path from 'path';
import _ from 'lodash';


export default _.merge({}, baseConfig, {
  entry: path.join(__dirname, 'index.js'),

  output: {
    filename: 'unit.js'
  }
});
