/**
 * load js
 * @DateTime 2018-08-17
 * @param    {string}   src   js address
 * @param    {string}   name  child module name
 * @param    {boolean}   isCatch 是否缓存这个 默认 flase
 * @return   {object}         一个promise对象
 *
 */
const _loadJs = (src, name, isCatch) => {
  const scriptTag = document.createElement('script')
  scriptTag.type = "text/javascript"
  if (!isCatch) {
    if (/\?/.test(src)) {
      src = src + 'v=' + (new Date()).getTime()
    } else {
      src = src + '?v=' + (new Date()).getTime()
    }
  }
  return new Promise((resovle, reject) => {
    scriptTag.onload = function () {
      resovle(name)
    }
    scriptTag.src = src
    document.body.appendChild(scriptTag)
  })
}

const loadModule = ({src}, routerName) => {
  if (!window._G_[routerName] && src) {
    console.log(`${routerName}加载中...`)
    return _loadJs(src, routerName, false)
  } else if (!src) {
    return Promise.resolve(`${routerName}子模块中src配置有问题...`)
  } else {
    return Promise.resolve(`${routerName}已经加载完...`)
  }
}

export default loadModule

