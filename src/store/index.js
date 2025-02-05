import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'red',
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  mutations: {
    increaseCounter(state, number) {
      state.counter += number;
    },
    decreaseCounter(state, number) {
      state.counter -= number;
    },
    setColorCode(state, code) {
      state.colorCode = code
    }
  },
  actions: {
    increaseCounter({commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
        .then((res) => {
          commit('increaseCounter', res.data)
        })
    },
    decreaseCounter({commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
        .then((res) => {
          commit('decreaseCounter', res.data)
        })
    },
    setColorCode({commit}, number) {
      commit('setColorCode', number)
    }
  },
  modules: {
  }
})
