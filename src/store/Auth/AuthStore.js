import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(formData) {
      try {
        const response = await axios.post('organization-login', formData);
        
        if (response.status === 200) {
            console.log(response.data);
            
          this.user = response.data.data.employee;
          this.token = response.data.data.token;

          localStorage.setItem('token', this.token);

          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: response.data.message,
          });

          return response;
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: error.response?.data?.message || error.message,
        });

        throw error;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
    },

    isAuthenticated() {
      return !!this.token || !!localStorage.getItem('token');
    }
  },


  async submitPasswordResetEmail(email) {
    try {
      await axios.post("/api/password-reset", { email });
    } catch (error) {
      console.error("Password reset email submission failed:", error);
    }
  },
  async validateCode(code) {
    try {
      const response = await axios.post("/api/validate-code", { code });
      if (response.data.valid) {
        this.$router.push("/reset-password");
      } else {
        alert("Invalid code.");
      }
    } catch (error) {
      console.error("Code validation failed:", error);
    }
  },
});
