/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cell from '@/components/Cell'
import Prueba from '@/components/Prueba'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cell',
      name: 'Cell',
      component: Cell
    },
    {
      path: '/prueba',
      name: 'Prueba',
      component: Prueba
    }
  ]
})
