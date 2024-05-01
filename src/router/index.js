import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '@/views/login'
import home from '@/views/home'

import console from '@/views/console'
import student from '@/views/student'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: '/console',
          name: 'console',
          component: console
        }, {
          path: '/student',
          name: 'student',
          component: student
        }
      ]
    }
  ]
})
