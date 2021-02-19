import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import store from '../store/index'

const socket = new VueSocketIO({
  debug: true,
  connection: 'https://whackamole-hacktiv8.herokuapp.com/',
  vuex: {
    store,
    actionPrefix: 'SOCKET_'
  }
})

Vue.use(socket)
