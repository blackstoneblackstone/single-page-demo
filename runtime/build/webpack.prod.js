'use strict'
//vf2e.config.js该配置文件需要在配置中心配置，配置信息已精简，只有线上环境需要
const config = require('./vf2e.config.js')
const webpack = require('webpack')
const cdn_config = config.cdn
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    app: "./src/main.js"
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
    }]
  },
  output: {
    path: path.join(__dirname, "../output"),
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].bundle.js',
    publicPath: cdn_config.publicPath
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    //去除重复的css
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true
        }
      }
    })
  ]
}
