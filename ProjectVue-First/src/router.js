import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import List from '@/pages/List'
import Login from '@/pages/Login'
import New from '@/pages/New'
import Orders from '@/pages/Orders'
import Registration from '@/pages/Registration'
import Ad from './components/Ad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/ad',
      name: 'ad',
      component: Ad
    }
  ],
  mode: 'history'
})
