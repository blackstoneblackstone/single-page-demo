'use strict'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: "./src/main.js",
    vendor: [
      'vue',
      'vue-router',
      'cookies-js',
      'axios',
      'form-urlencoded',
      './src/lib/polyfill.min.js'
    ]
  },
  output: {
    path: path.join(__dirname, "../output"),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        esModule: false
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'css-loader',
      options: {
        minimize: true
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader?name=[path][name]-[hash].[ext]'
    }, {
      test: /\.(wav|mp3)$/,
      loader: 'file-loader?name=[path][name]-[hash].[ext]'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    /**
     * 使用[hash]会使用相同的哈希散列值，不会针对每一个chunk进行哈希散列。无法对vendor进行有效的长期缓存
     * 对output使用chunkhash进行哈希值计算，加上runtime manifest的单独提取，能够保证 vendor库没有更新的情况下，vendor的hash不变
     * 而减少一次请求，从缓存中读取，最多就是浏览器刷新的情况下多一个304请求。
     * */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    })
  ],
  devtool: 'source-map'
}

