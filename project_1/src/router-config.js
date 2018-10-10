/*
 * 路由配置器
 */

const index = () => import ( /*webpackChunkName: 'index'*/ './pages/home/index.vue')

export default [
  {
    path: '/reward',
    component: index,
    title: '首页'
  }
]
