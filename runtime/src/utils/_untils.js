import cookies from 'cookies-js'
//设置cookie
function setCookie(k, v) {
  let COOKIE_LIFETIME = 365 * 24 * 60 * 60 * 1000
  let HOST_NAME = location.hostname
  let COOKIE_DOMAIN = HOST_NAME.slice(HOST_NAME.indexOf('.'))
  cookies.set(k, v, {domain: COOKIE_DOMAIN, expires: new Date(Date.now() + COOKIE_LIFETIME), path: '/'})
}

//删除cookie
function clearCookie(objName) {
  var str = objName + "=''"
  var date = new Date()
  date.setTime(date.getTime() - 10000)
  str += "; expires=" + date.toGMTString()
  document.cookie = str
}

// 获取cookie
function getCookies() {
  var str = document.cookie
  var cookies = {}
  var orginCookies = str.split('; ')
  for (var index = 0; index < orginCookies.length; index++) {
    var cookieInfo = orginCookies[index].split('=')
    cookies[cookieInfo[0]] = cookieInfo[1]
  }
  return cookies
}


export default {
  getCookies, clearCookie, setCookie
}


