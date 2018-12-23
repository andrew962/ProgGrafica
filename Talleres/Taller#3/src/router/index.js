/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import estructura from '@/components/estructura'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/estructura',
      name: 'estructura',
      component: estructura
    }
  ]
})
