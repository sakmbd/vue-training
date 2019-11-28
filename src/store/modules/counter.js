var state = {
  counter: 0
}

var getters = {
  getCounter (state) {
    return state.counter
  }
}

var mutations = {
  increment (state, payload) {
    state.counter = state.counter + payload
  }
}
var actions = {
  increment ({ commit, state }, payload) {
    if (payload && payload === 'double') {
      commit('increment', 2)
    } else {
      commit('increment', 1)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
