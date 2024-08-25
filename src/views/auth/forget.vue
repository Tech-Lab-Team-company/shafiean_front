<template>
    <div class="container login">
      <form action="">
        <img
          src="../../assets/media/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_5089976.jpg"
          style=""
          width="150px"
          alt=""
        />
        <h2>تسجيل الدخول</h2>
        <p>
          يرجي إدخال كلمه مرور قويه تحتوي علي الاقل علي 8 رموز <br />
          مكونه من خروف وارقام
        </p>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Yor Email Or Phone"
        />
        <input
          type="password"
          class="form-control mt-3"
          placeholder="Enter Your Password"
        />
        <router-link to="/forget" class="forgot">هل نسيت كلمه المرور؟</router-link>
        <router-link to="/">
          <button @click="blockAlert()" type="button" class="btn btn-primary">تسجيل الدخول</button>
        </router-link>
  
        <h5>
          ليس لديك حساب بعــد ؟
          <router-link
            style="text-decoration: none; color: #06797e"
            to="/register"
            >انشاء حساب
          </router-link>
        </h5>
      </form>
    </div>
  </template>
    
    <script>
    import Swal from "sweetalert2";
  export default {
    name: "register-login",
    methods:{
      blockAlert() {
                      Swal.fire({
                        html:
                          '<h5 class="swal2-title">   لقم تم تسجيل دخولــك  بنـجــاح </h5>' +
                          '<p class="swal2-html-container">  </p>',
  
                   
                      });
                    }
    }
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
    margin-right: 70%;
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