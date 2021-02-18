import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SuiVue from 'semantic-ui-vue'
import socket from './lib/socket'

Vue.config.productionTip = false
Vue.use(SuiVue)
Vue.use(socket)

new Vue({
  router,
  store,
  sockets: {
    updateBoard (board) {
      return board
    }
  },
  render: h => h(App)
}).$mount('#app')
