import VueSocketIO from 'vue-socket.io'
import store from '../store/index'

export default new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_'
  }
})
