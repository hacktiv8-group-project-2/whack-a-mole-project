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
<<<<<<< HEAD
=======
    username: '',
    gameStatus: false,
>>>>>>> 40dae957512fd183eb72577dc3f811eaff22bd19
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
<<<<<<< HEAD
=======
    changeGameStatus (state, payload) {
      state.gameStatus = payload
    },
>>>>>>> 40dae957512fd183eb72577dc3f811eaff22bd19
    updateBoard (state, payload) {
      state.board = payload
    }
  },
  actions: {
<<<<<<< HEAD
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
=======
    SOCKET_serverUser (context, newUser) {
      context.commit('pushToUsers', newUser)
    },
    gameStart (context, payload) {
      context.commit('changeGameStatus', true)
    },
    randomizeMole (context, payload) {
>>>>>>> 40dae957512fd183eb72577dc3f811eaff22bd19
    },
    SOCKET_updateBoard (context, payload) {
      context.commit('updateBoard', payload)
    }
  },
  modules: {
  }
})
