<template>
  <div class="d-flex sidemobile p-0">
    <!-- ======= Start Sidebar ======= -->
    <side-bar></side-bar>
    <!-- ======= End Sidebar ======= -->

    <!-- ======= Main ======= -->
    <section class="index_cards">
      <!-- ======= Start navbar ======= -->
      <nav-bar></nav-bar>
      <!-- ======= End navbar ======= -->

      <!-- ======= Start Content ======= -->
      <section class="content">
        <router-view />
      </section>
      <!-- ======= End Content ======= -->

      <!--start footer -->
      <footer-page></footer-page>
      <!--End footer -->
    </section>
  </div>
  <!-- ======= Main ======= -->
</template>

<script>
import NavBar from "./components/layouts/NavBar.vue";
import SideBar from "./components/layouts/SideBar.vue";
import FooterPage from "./components/layouts/FooterPage.vue";
export default {
  components: {
    NavBar,
    SideBar,
    FooterPage,
  },
};
</script>

<style lang="scss">
/* @import url("../src/assets/sass/style.scss"); */
/* @import url("../src/assets/css/nasra.css"); */
@import url("../src/assets/sass/style.min.css");
// @import url("../src/assets/css/nasra.css");

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
