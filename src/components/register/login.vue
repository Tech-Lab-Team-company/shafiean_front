<template>
  <div class="container login">
    <form @submit.prevent="LoginNow">
      <img
        src="../../assets/media/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_5089976.jpg"
        width="150px"
        alt=""
      />
      <h2 class="font">تسجيل الدخول</h2>
      <p class="font">
        يرجى إدخال كلمة مرور قوية تحتوي على الأقل 8 رموز <br />
        مكونة من حروف وأرقام
      </p>
      <input
        type="email"
        class="form-control"
        placeholder="Enter Your Email or Phone"
        v-model="email"
      />
      <div class="password">
        <input
          id="password"
          :type="passwordType"
          placeholder="Enter your password"
          class="form-control"
          v-model="password"
        />
        <i class="fa-solid fa-lock" @click="togglePasswordVisibility"></i>
      </div>
      <router-link to="/registerforget" class="forgot"
        >هل نسيت كلمة المرور؟</router-link
      >
      <button type="submit" class="btn btn-primary">تسجيل الدخول</button>

      <h5 class="font">
        ليس لديك حساب بعد؟
        <router-link
          style="text-decoration: none; color: #06797e"
          to="/register"
          >إنشاء حساب</router-link
        >
      </h5>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  data() {
    return {
      passwordType: "password",
      email: "",
      password: "",
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
    ...mapActions(["saveToken"]),
    LoginNow() {
      axios
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Login successful",
              text: "You have successfully logged in!",
            }).then(() => {
              const token = response.data.data.token;
              this.$store.dispatch("saveToken", token);
              console.log(token);
              this.$router.push({ name: "products" });
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Unexpected Error",
              text: `Unexpected status code: ${response.status}`,
            });
          }
        })
        .catch((error) => {
          let errorMessage = "The provided credentials are incorrect.";
          if (error.response) {
            switch (error.response.status) {
              case 400:
                errorMessage = error.response.data.message;
                break;
              case 401:
                errorMessage = error.response.data.message;
                break;
              default:
                errorMessage = `Error ${error.response.status}: ${
                  error.response.data.message || "An unexpected error occurred."
                }`;
            }
          } else if (error.request) {
            errorMessage =
              "No response received from the server. Please check your network connection.";
          } else {
            errorMessage = `Error: ${error.message}`;
          }

          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: errorMessage,
          });
        });
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Cairo", sans-serif;
  font-weight: bold;
}
h2 {
  text-align: center;
}
.login {
  width: 30%;
  margin: 0 auto;
  margin-top: 10rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px 0px #ccc;
}
.forgot {
  text-decoration: none;
  margin-right: 65%;
  color: #06797e;
  display: block;
  margin-top: 2%;
}
button {
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  width: 40%;
}
.password {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e8f0fe;
  border-radius: 30px;
  margin-top: 1rem;
  padding: 0 0.5rem;
}
.password input {
  background-color: unset !important;
}
.password i {
  color: #06797e;
  cursor: pointer;
}
.font {
  font-family: "regular";
}
a {
  font-family: "regular";
}
</style>
