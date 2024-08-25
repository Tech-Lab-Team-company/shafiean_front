import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    token: null,
    auth: false,
  },
  getters: {
    token: (state) => state.token,
    auth: (state) => state.auth,
    isAuthenticated(state) {
      return !!state.token;
    },
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setAuth(state, auth) {
      state.auth = auth;
    },
    clearToken(state) {
      state.token = null;
    },
  },
  actions: {
    saveToken({ commit }, token) {
      commit("setToken", token);
      commit("setAuth", true);
      localStorage.setItem("token", token);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    clearToken({ commit }) {
      commit("clearToken");
      localStorage.removeItem("token");
    },
    async logOut() {
      await axios.post("/logout").then((res) => {
        if (res.data.status) {
          localStorage.removeItem("token");
          localStorage.clear();
        }
      });
    },
  },
  modules: {},
});
