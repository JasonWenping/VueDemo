import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import Task from '@/components/Task'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-page',
      component: Login
    },
    {
      path:'/header',
      //name: 'Header',
      component: Header,
      children: [
        {
          path: 'helloworld',
          name: 'index-page',
          component: HelloWorld
        },
        {
          path: 'list',
          name: 'list-page',
          component: List
        },
        {
          path: 'task',
          name: 'task-page',
          component: Task
        },
        {
          path: '/',
          redirect: 'helloworld'
        }
      ]
    }
  ]
})
