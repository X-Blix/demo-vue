import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import login from '@/views/login.vue'
import home from '@/views/home.vue'

import axios from 'axios'
Vue.prototype.$axios = axios

// axios.defaults.baseURL = 'http://localhost:8080/api'

Vue.config.productionTip = false
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
