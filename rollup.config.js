const path = require('path');

export default {
  input: 'src/main.js',
  output: {
    file: path.join(__dirname, 'dist/bundle.rollup.js'),
    format: 'cjs', // 生成包的格式为'cjs': CommonJS，适用于 Node 和 Browserify/Webpack
  }
}