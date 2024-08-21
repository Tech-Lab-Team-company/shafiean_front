<template>
  <div class="sidemobile p-0">
    <!-- ======= Start Sidebar ======= -->
    <side-bar v-if="!isLoginPage "></side-bar>
    <!-- ======= End Sidebar ======= -->

    <!-- ======= Main ======= -->
    <section class="index_cards">
      <!-- ======= Start navbar ======= -->
      <nav-bar v-if="!isLoginPage"></nav-bar>
      <!-- ======= End navbar ======= -->

      <!-- ======= Start Content ======= -->
      <section class="content">
        <router-view />
      </section>
      <!-- ======= End Content ======= -->

      <!-- Start Footer -->
      <footer-page v-if="!isLoginPage"></footer-page>
      <!-- End Footer -->
    </section>
  </div>
  <!-- ======= Main ======= -->
</template>

<script>
import NavBar from "./components/layouts/NavBar.vue";
import SideBar from "./components/layouts/SideBar.vue";
import FooterPage from "./components/layouts/FooterPage.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    NavBar,
    SideBar,
    FooterPage,
  },
  setup() {
    const route = useRoute();

    const isLoginPage = computed(() => route.name === "register-login"); // Ensure your login route is named 'login'

    return {
      isLoginPage,
    };
  },
};
</script>

<style lang="scss">
@import url("../src/assets/sass/style.min.css");

#app {
  font-family: "Avenir", "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
