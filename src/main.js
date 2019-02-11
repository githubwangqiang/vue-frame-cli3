import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import api from './api/index' // 导入api接口

import 'lib-flexible'

// 全局引入Toast
import './components/comment/Toast/toast.css'
import Toast from './components/comment/Toast/index'
Vue.use(Toast)

Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
