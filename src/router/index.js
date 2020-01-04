import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/index/home',
    children: [
      {
        path: '/index/home',
        component: () => import('../views/Home')
      }, {
        path: '/index/menu',
        component: () => import('../views/Menu')
      }, {
        path: '/index/order',
        component: () => import('../views/Order')
      }, {
        path: '/index/my',
        component: () => import('../views/My')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
