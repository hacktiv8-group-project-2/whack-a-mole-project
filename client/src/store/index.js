import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      score: 0
    },
    users: [],
    username: '',
    gameStatus: false,
    board: []
  },
  mutations: {
    setUserName (state, val) {
      state.user.name = val
    },
    pushToUsers (state, val) {
      state.users = val
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
    SOCKET_serverUser (context, newUser) {
      context.commit('pushToUsers', newUser)
    },
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
