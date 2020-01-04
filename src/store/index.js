import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seatinfo: ''
  },
  mutations: {
    setseatinfo(state, Payload) {
      state.seatinfo = Payload
    }
  },
  actions: {
  },
  modules: {
  }
})
