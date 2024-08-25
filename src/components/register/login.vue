<template>
  <div class="container login">
    <form @submit.prevent="handleLogin">
      <img
        src="../../assets/media/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_5089976.jpg"
        width="150px"
        alt=""
      />
      <h2>تسجيل الدخول</h2>
      <p>
        يرجى إدخال كلمة مرور قوية تحتوي على الأقل 8 رموز <br />
        مكونة من حروف وأرقام
      </p>
      <input
        type="text"
        class="form-control"
        placeholder="Enter Your Email or Phone"
        v-model="emailOrPhone"
      />
      <input
        type="password"
        class="form-control mt-3"
        placeholder="Enter Your Password"
        v-model="password"
      />
      <router-link to="/registerforget" class="forgot">هل نسيت كلمة المرور؟</router-link>
      <button type="submit" class="btn btn-primary">تسجيل الدخول</button>

      <h5>
        ليس لديك حساب بعد؟
        <router-link
          style="text-decoration: none; color: #06797e"
          to="/register"
        >إنشاء حساب</router-link>
      </h5>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "register-login",
   

  data() {
    return {
      emailOrPhone: "",
      password: "",
    };
  },
  
  methods: {
  async handleLogin() {
    
    // Validate email/phone and password
    if (!this.emailOrPhone || !this.password) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "يرجى إدخال البريد الإلكتروني/الهاتف وكلمة المرور!",
      });
      return;
    }
  
    // Check if password is at least 8 characters long
    if (this.password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل!",
      });
      return;
    }

    // Prepare the payload
    const payload = {
      email: this.emailOrPhone,
      password: this.password,
    };
    
    try {
      // Send the POST request to the API
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Parse the JSON response only once
      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          html: '<h5 class="swal2-title">لقد تم تسجيل دخولك بنجاح</h5>',
        });

        // Store necessary data in localStorage
        localStorage.setItem("token", JSON.stringify(result.data.token));
        localStorage.setItem("gender", JSON.stringify(result.data.gender));
        localStorage.setItem("image", JSON.stringify(result.data.image));

        localStorage.setItem("name", JSON.stringify(result.data.name));
        localStorage.setItem("email", JSON.stringify(result.data.email));
        localStorage.setItem("phone", JSON.stringify(result.data.phone));
       

        // Redirect to the home page or another page
        this.$router.push("/HomeView");
      } else {
        // Show error message if login fails
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: result.message || "فشل تسجيل الدخول. يرجى التحقق من بيانات الاعتماد الخاصة بك.",
        });
      }
    } catch (error) {
      // Handle network errors or unexpected issues
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقًا.",
      });
    }
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
</style>
