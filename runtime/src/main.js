import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import cookies from 'cookies-js'
import routes from './router-config'
import utils from './utils/_untils'
import i18n from './utils/i18n'
import {pushPath} from './core/routerRecord'
import routerMap from './core/moduleList'
import loadModule from './core/loader'
import global from './core/global'

//注册router
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history',
  saveScrollPosition: true
})

//注册全局暴露的对象 _G_
global({
  router,
  i18n,
  utils,
  cookies
})

router.beforeEach((to, from, next) => {
  const toPath = to.path.replace(/(.*)\?.*/, '$1').replace(/\/([^\/]*).*/, '$1')
  const routerConfig = routerMap[toPath]
  if (routerConfig) {
    loadModule(routerConfig, toPath).then((info) => {
      pushPath(info)
    })
  }
  next()
})


//暴露当前vue实例
window._G_.Vm = new Vue({
  router,
  i18n,
  el: '#app',
  render: h => h(app)
})
