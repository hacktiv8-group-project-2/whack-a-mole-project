import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      id: '',
      score: 0
    },
    users: [],
    board: []
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    updateScore (state, score) {
      state.user.score = score
    },
    setUserName (state, val) {
      state.user.name = val
    },
    pushToUsers (state, val) {
      state.users = val
    },
    changeStatus (state, payload) {
      state.board[payload.id].status = false
    },
    updateBoard (state, payload) {
      state.board = payload
    }
  },
  actions: {
    SOCKET_userData (context, user) {
      context.commit('setUser', user)
    },
    SOCKET_serverUser (context, users) {
      context.commit('pushToUsers', users)
      let userScore
      users.forEach(user => {
        console.log('serverUser search')
        if (user.id === context.state.user.id) {
          console.log('serverUser find')
          userScore = user.score
        }
      })
      context.commit('updateScore', userScore)
    },
    SOCKET_updateBoard (context, payload) {
      context.commit('updateBoard', payload)
    }
  },
  modules: {
  }
})
