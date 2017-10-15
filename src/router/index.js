import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/landing'
import Portfolio from '@/views/portfolio'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
