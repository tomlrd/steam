import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/Login').default
    },
    {
      path: '/Main',
      name: 'main-page',
      component: require('@/components/Main').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})