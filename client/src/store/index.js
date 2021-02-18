import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      score: 0
    },
    users: []
  },
  mutations: {
    setUserName (state, val) {
      state.user.name = val
    },
    pushToUsers (state, val) {
      state.users = val
    }
  },
  actions: {
    SOCKET_serverUser (context, newUser) {
      context.commit('pushToUsers', newUser)
    }
  },
  modules: {
  }
})
