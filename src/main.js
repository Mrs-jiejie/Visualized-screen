import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/index.scss' // global css
import '@/assets/styles/base.scss' // base css
import * as echarts from 'echarts';
// let echarts = require('echarts')
import VCharts from 'v-charts'

Vue.use(ElementUI);
Vue.use(VCharts)

Vue.prototype.echarts = echarts;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
