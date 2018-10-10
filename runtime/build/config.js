module.exports = {
  cdn: {
    publicPath: '/'
  },
  isUseHttps: false,
  host: "xx.com.cn",
  proxyTable: {
    '/rest/gw': {
      target: 'http://gw.com.cn',
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/rest/gw': '/'
      }
    }
  }
}