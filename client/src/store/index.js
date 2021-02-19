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
    },
    setMessage (state, value) {
      state.message = value
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
    },
    gameReadyGo (context) {
      context.commit('changeGameStatus', true)
      let time = 0
      context.commit('setMessage', `${2 - time}`)
      const timer1 = setInterval(() => {
        time++
        // console.log('count down', time)
        context.commit('setMessage', `${2 - 1}`)
        if (time === 2) {
          clearInterval(timer1)
          time = 0
          // gameStart()
          context.commit('setMessage', 'GO')
        }
      }, 1000)
    }
  },
  modules: {
  }
})
