// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MixIn from '@/vueMixin'
import App from './App'
import router from './router'
import Http from '@/fetch/axios'

Vue.config.productionTip = false
Vue.mixin(MixIn)
Vue.prototype.$http = Http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
