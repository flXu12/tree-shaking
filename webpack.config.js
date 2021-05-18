const path = require('path');

module.exports = {
  mode: 'production', 
  entry: './src/main.js',
  output: {
    filename: 'bundle.webpack.js',
    path: path.resolve(__dirname, 'dist')
  }
}