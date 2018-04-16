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
      name: 'Login',
      component: Login
    },
    {
      path:'/header',
      //name: 'Header',
      component: Header,
      children: [
        {
          path: 'helloworld',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: 'list',
          name: 'List',
          component: List
        },
        {
          path: 'task',
          name: 'Task',
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
