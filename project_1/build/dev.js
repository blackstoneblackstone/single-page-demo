//本地开发测试专用
const fs = require('fs')
const https = require('https')
const express = require('express')
const webpack = require('webpack')
const webpack_config = require('./webpack.dev.js')
const proxy = require('http-proxy-middleware')
const vf2e = require('./vf2e.config.js')
const browserSync = require('browser-sync').create()
const port = 9000
const browserSyncState = true
const reload = browserSync.reload
const app = express()
const compiler = webpack(webpack_config)

compiler.watch({
  aggregateTimeout: 100
}, function (err, stats) {
  reload()
  console.log(stats.toString({
    color: true
  }))
})

app.use(function (req, res, next) {
  console.log('%s %s - %s', new Date().toISOString(), req.method, req.url)
  return next()
})

Object.keys(vf2e.proxyTable).forEach(function (context) {
  var options = vf2e.proxyTable[context]
  if (typeof options === 'string') {
    options = {
      target: options,
    }
  }
  app.use(proxy(context, options))
})

// static file service
app.use('/', express.static("./output"))
// index for learning
app.use('/', function (req, res) {
  var indexHtml = fs.readFileSync('./output/index.html')
  res.header('Content-Type', 'text/html')
  res.end(indexHtml)
})

app.listen(port, function () {
  console.log([
    'Listening on port ' + port + ',',
  ].join('\n'))
})

if (browserSyncState) {
  browserSync.init({
    https: vf2e.isUseHttps,
    host: vf2e.host,
    open: "external",
    port: 9001,
    proxy: {
      target: `${vf2e.host}:${port}`
    }
  });
}
