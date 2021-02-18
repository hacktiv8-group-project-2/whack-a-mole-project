import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      score: 0
    }
  },
  mutations: {
    setUserName (state, val) {
      state.user.name = val
    }
  },
  actions: {
  },
  modules: {
  }
})
