import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VCharts from 'v-charts'
import './registerServiceWorker'
import './plugins/axios'

Vue.use(VCharts)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
