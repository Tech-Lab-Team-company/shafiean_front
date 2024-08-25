export default {
  setUser(state, { user }) {
    state.token = user.token;
    state.email = user.email;
  },logout(state) {
    state.token = null;
    state.email = null;
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  }
};