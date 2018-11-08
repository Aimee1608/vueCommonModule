import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import listOrder from '@/views/listOrder'
import newOrder from '@/views/newOrder'
import active from '@/views/active'
import system from '@/views/system'
import user from '@/views/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/listOrder'
    },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/listOrder',
          name: 'listOrder',
          component: listOrder
        },
        {
          path: '/newOrder',
          name: 'newOrder',
          component: newOrder
        },
        {
          path: '/active',
          name: 'active',
          component: active
        },
        {
          path: '/system',
          name: 'system',
          component: system
        },
        {
          path: '/user',
          name: 'user',
          component: user
        }
      ]
    }]
})
