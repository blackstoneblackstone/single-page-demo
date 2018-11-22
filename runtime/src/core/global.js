import axios from '../utils/_axios'
import {routerRecord} from './routerRecord'
import routerMap from './moduleList.js'
let currentModule = ''
let hasRegister = []


function runtime({router, i18n, utils, cookies}) {
  window._G_ = {
    openNewRouter: true,
    utils,
    cookies,
    axios,
    //动态注册路由
    registerRouter(name, routers){
      console.log('注册的路由：')
      console.log(routers)
      if (hasRegister.includes(name)) {
        return console.log(`${name}注册路由已注册`)
      }
      if (!Array.isArray(routers)) {
        return console.log(`${name}注册路由传入routers 不是Array类型`)
      }
      const routersCopy = []
      const reg = new RegExp("^\\/" + name + "\\/?")
      if (!routerMap[name]) {
        console.log(`${name}模块没有注册`)
      }
      routers.forEach((item) => {
        if (reg.test(item.path)) {
          routersCopy.push(item)
        } else {
          console.log(`${item.path} 没有添加模块名 ${name}`)
        }
      })
      router.addRoutes(routersCopy)
      currentModule = name
    },
    push(option){
      if (option.name && !option.path) {
        return console.log("不支持 name 跳转")
      }
      router.push(option)
    },
    go(number){
      router.go(number)
    },
    backMod(){
      const currentMod = routerRecord[routerRecord.length - 1]
        .replace(/(.*)\?.*/, '$1')
        .replace(/\/([^\/]*).*/, '$1')
      //let num = 2
      while (routerRecord.length > 1) {
        const modName = routerRecord[routerRecord.length - 2]
          .replace(/(.*)\?.*/, '$1')
          .replace(/\/([^\/]*).*/, '$1')
        routerRecord.pop()
        if (modName !== currentMod) {
          break
        }
      }
      router.replace(routerRecord[routerRecord.length - 1])
    },
    replace(option){
      if (option.name && !option.path) {
        return console.log("不支持 name 跳转")
      }
      //option.path = '/' + mod + option.path
      router.replace(option)
    },
    preModLastPage(){
    },
    preModFirstPage(){
    },
    pushLang(lang, packages){
      i18n.setLocaleMessage(lang, packages)
    }
  }
}

export default runtime

// if(routerMap[toPath]){
// 	if(toPath === currentModule ){
// 	  next()   // 已经在模块内
// 	}else{
// 	  currentModule = toPath   // 修改 current module （切换module）
// 	  next()
// 	}
// }else if(to.matched.length){
// 	currentModule = ''
// 	next()  //进入平台路由
// }else if(currentModule){
// 	next({path: '/' + currentModule + to.fullPath})
// }else{
// 	next('/404')
// }


/* eslint-enable */
