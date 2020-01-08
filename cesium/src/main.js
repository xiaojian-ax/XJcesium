/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import axios from 'axios';
import QS from 'qs'


// import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})