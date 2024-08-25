import axios from "axios";
export default {
  async Login({ commit }, form) {
    try {
      let response = await axios.post("/admin/login", form);
      localStorage.setItem("token", response?.data?.data?.token);
      const UserResource = {
        email: response?.data?.data?.email,
      };

      localStorage.setItem("user", JSON.stringify(UserResource));
      commit("setUser", { user: response });

      return response;
    } catch (error) {
      return error.response;
    }
  },

  logout({ commit }) {
    commit("logout");
  },
};
