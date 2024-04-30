import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

//自动生成路由
//https://www.cnblogs.com/dcyd/p/16474036.html

routes.push({
  path: '/',
  redirect: '/home'
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
