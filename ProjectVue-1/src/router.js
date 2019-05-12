import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import AdList from '@/pages/AdList'
import AdNew from '@/pages/AdNew'
import Login from '@/pages/Login'
import Registration from '@/pages/Registration'
import Orders from '@/pages/Orders'
import Ad from '@/components/Ad'
import error404 from '@/components/404'

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
      component: AdList
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/new',
      name: 'new',
      component: AdNew
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
    },
    {
      path: '*',
      component: error404
    }
  ]
  // mode: 'history'
})
