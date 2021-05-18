## tree-shaking

一个关于tree-shaking的小实践，分别使用webpack和rollup对一段代码进行打包，分析构建后代码的差异。

## webpack
webpack是一个现代JavaScript应用程序的静态模块打包器（module bundler）。当webpack处理应用程序时，会递归地构建一个依赖关系图（dependency graph），其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle。

## rollup
rollup是一个JavaScript模块打包器，可以将小块代码编译成大块复杂的代码。

- 初始化一个空项目，分别安装webpack和rollup相关依赖
```bash
yarn add webpack -D
yarn add 
```

- 添加webpack和rollup的配置文件：
```js
// webpack.config.js 
const path = require('path');

module.exports = {
  mode: 'production', // 设置为production是压缩后的代码。
  entry: './src/main.js',
  output: {
    filename: 'bundle.webpack.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
  
```js
// rollup.config.js
const path = require('path');

export default {
  input: 'src/main.js',
  output: {
    file: path.join(__dirname, 'dist/bundle.rollup.js'),
    format: 'cjs', // 生成包的格式为'cjs': CommonJS，适用于 Node 和 Browserify/Webpack
  }
}
```
- 分别执行webpack和rollup打包命令
```bash
yarn webpack   # 在根目录的dist路径下生成一个bundle.webpack.js文件
yarn rollup  # 在根目录的dist路径下生成一个bundle.rollup.js文件
```
- diff: webpack VS rollup