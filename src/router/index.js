import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/views/index'
import UserLogin from '@/views/UserLogin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'UserLogin',
      component: UserLogin
    }
  ]
})
