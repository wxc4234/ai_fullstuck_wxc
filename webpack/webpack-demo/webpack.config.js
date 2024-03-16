// 向外输出 commonjs 模块
// 引入 node 内置的 path 模块
// entry 就是入口文件的路径
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist') //dist 目录是打包后的文件存放的目录
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: '首页',
      filename: 'index.html'
    })
  ]
}