import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Request from './components/Request'


Vue.component('Request', Request)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

