'use strict'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: "./src/main.js",
    // vendor: [
    //   'runtime',
    // ]
  },
  output: {
    path: path.join(__dirname, "../output"),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    publicPath: 'http://lihb.vipkid.com.cn:9001/'
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
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, 'node_modules/vvos-js')
      ],
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
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devtool: 'source-map'
}

