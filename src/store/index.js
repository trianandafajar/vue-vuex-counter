import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    colorCode: "red",
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  mutations: {
    increaseCounter(state, number) {
      state.counter += number;
    },
    decreaseCounter(state, number) {
      state.counter -= number;
    },
    setColorCode(state, code) {
      state.colorCode = code;
    },
  },
  actions: {
    // Action untuk menambah counter dengan angka acak dari API
    increaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      )
        .then((res) => {
          // Menambahkan angka acak ke counter melalui mutation
          commit("increaseCounter", res.data);
        })
        .catch((error) => {
          console.error("Error fetching data for increaseCounter:", error);
        });
    },
    // Action untuk mengurangi counter dengan angka acak dari API
    decreaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      )
        .then((res) => {
          // Mengurangi angka acak dari counter melalui mutation
          commit("decreaseCounter", res.data);
        })
        .catch((error) => {
          console.error("Error fetching data for decreaseCounter:", error);
        });
    },
    // Action untuk mengubah kode warna
    setColorCode({ commit }, colorCode) {
      commit("setColorCode", colorCode);
    },
  },
  modules: {},
});
