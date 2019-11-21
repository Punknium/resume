import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { createStore } from './store'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  store: createStore(),
}).$mount('#app')
