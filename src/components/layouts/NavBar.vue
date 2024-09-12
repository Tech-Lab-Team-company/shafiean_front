<template>
  <nav class="navbar">
    <div class="d-flex w-25">
      <div class="menu">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          type="search"
          name=""
          id=""
          class="form-control"
          placeholder="Search…"
        />
      </div>
    </div>
    <div>
      <div class="changelocal d-inline-block">
        <div class="dropdown lang">
          <a
            class="btn dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <!-- lang -->
            <i class="fa-solid fa-earth-americas px-2"></i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a class="dropdown-item">
                <img
                  src="../../assets/media/image/saudi-arabia.png"
                  alt="saudi-arabia"
                />
                Arabic
              </a>
              <a class="dropdown-item">
                <img
                  src="../../assets/media/image/united-kingdom.png"
                  alt="united-kingdom"
                />
                English
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="dropdown d-inline-block">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="../../assets/media/image/7w7w.jpg"
            class="admin_img"
            alt="person"
          />
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="Reports-on-the-Shafia-platform.html"
              >Reports</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="General-Settings.html">Setting</a>
          </li>
          <li><router-link to="/" @click="logout()" class="dropdown-item">Logout</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data(){
    return{

    }
  },
  methods:{
    logout() {
      Swal.fire({
        title: "logout",
        text: "are_you_sure_logout",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "back",
        confirmButtonText: "confirm_logout",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>

<style>
</style>