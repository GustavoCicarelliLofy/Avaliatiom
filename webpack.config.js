const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/math.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'math',
    libraryTarget: 'umd'
  }
};