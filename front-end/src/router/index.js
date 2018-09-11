import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: indexPage
    },
    {
      path: '/a',
      name: 'aaa',
      component: indexPage
    },
    {
      path: '/b',
      name: 'bbb',
      component: indexPage
    },
    {
      path: '/b/a',
      name: 'baa',
      component: indexPage
    }
  ]
})
