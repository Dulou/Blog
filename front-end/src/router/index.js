import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'aaa',
      component: HelloWorld
    },
    {
      path: '/b',
      name: 'bbb',
      component: HelloWorld
    },
    {
      path: '/b/a',
      name: 'baa',
      component: HelloWorld
    }
  ]
})
