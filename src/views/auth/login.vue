<template>
  <div class="naim-login">
    <form @submit.prevent="login">
      <div class="logo">
        <img src="../../assets/media/logo.png" alt="" />
      </div>
      <label for="email">ادخل البريد الألكتروني</label>
      <div class="input">
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="ادخل البريد الألكتروني"
          required
        />
      </div>
      <label for="password">ادخل كلمة المرور</label>
      <div class="input">
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="ادخل كلمة المرور"
          required
        />
      </div>
      <button type="submit">تسجيل الدخول</button>
    </form>
    <div class="forget">
      <router-link to="/forget-password">
        <h6>هل نسيت كلمة المرور؟</h6>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../../store/Auth/AuthStore";

export default {
  name: "LoginView",
  computed: {
    authStore() {
      return useAuthStore();
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await this.authStore.login({
        email: this.email,
        password: this.password,
      });

      this.$router.push("/");
    },
  },
};
</script>



<style scoped lang="scss">
* {
  font-family: "Cairo", sans-serif;
  font-weight: bold;
}
.naim-login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to top, #06797e, #cde382);
  form {
    padding: 2rem;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      font-size: 15px;
      margin-bottom: 0.5rem;
      font-family: "regular";
      text-align: start;
    }

    .input {
      position: relative;

      input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 0.875rem;
        outline: none;
        transition: border-color 0.3s ease;

        &:focus {
          border-color: #cde382;
          box-shadow: 0 0 0 3px #cde382;
        }
      }
    }

    button {
      padding: 0.75rem;
      border: none;
      border-radius: 6px;
      background: #06797e;
      color: #ffffff;
      font-size: 0.875rem;
      cursor: pointer;
      transition: background 0.3s ease;
      font-family: "regular";

      &:hover {
        background: #cde382;
        color: var(--main);
      }
    }
  }

  .forget {
    margin-top: 1rem;
a{
  text-decoration: none;  
}
    h6 {
      color: #ffffff;
      cursor: pointer;
      font-size: 16px;
      transition: color 0.3s ease;
      font-family: "regular";

      &:hover {
        color: #cde382;
      }
    }
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>