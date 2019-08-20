import Vue from 'vue'
import App from './App.vue'
import router from './router'


import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import store from './store'

Vue.config.productionTip = false
Vue.use(Ionic)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
