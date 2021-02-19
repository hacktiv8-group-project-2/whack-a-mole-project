import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    gameStatus: false,
    board: []
  },
  mutations: {
    setUsername (state, payload) {
      state.username = payload
    },
    changeStatus (state, payload) {
      state.board[payload.id].status = false
    },
    changeGameStatus (state, payload) {
      state.gameStatus = payload
    },
    updateBoard (state, payload) {
      state.board = payload
    }
  },
  actions: {
    gameStart (context, payload) {
      context.commit('changeGameStatus', true)
    },
    randomizeMole (context, payload) {
    },
    SOCKET_updateBoard (context, payload) {
      context.commit('updateBoard', payload)
    }
  },
  modules: {
  }
})
