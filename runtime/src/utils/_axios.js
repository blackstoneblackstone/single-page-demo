/*
* ajax拦截器
* */
import axios from 'axios'
axios.interceptors.request.use(function (config) {
  //拦截request请求，一般用来添加登录信息
  return config
})

axios.interceptors.response.use(response => {
  //拦截response
  return response
}, err => {
  //拦截错误，一般用来判断是否登录
  return Promise.reject(err)
})

export default axios
