import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('../components/city/City')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../components/order/Order')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('../components/personal/Personal')
  },
  {
    path: '/detailas',
    name: 'Detailas',
    component: () => import('../components/detailas/Detailas')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
