/*
 * 路由配置器
 */

const page404 = () => import ( /* webpackChunkName: 'page404' */ './components/404.vue')

export default [
  {
    path: '/404',
    component: page404,
    title: '404'
  }
]
