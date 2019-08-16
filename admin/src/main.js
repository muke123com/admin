// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import global from './components/Global'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.common = global.common
Vue.prototype.vm = new Vue();
Vue.prototype.API_URL = 'http://47.92.68.251:3001';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
