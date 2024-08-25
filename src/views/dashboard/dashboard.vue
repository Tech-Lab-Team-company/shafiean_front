<template>
  <div class="sidemobile p-0">
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
        <router-view></router-view>
      </section>
      <!-- ======= End Content ======= -->

      <!-- Start Footer -->
      <footer-page></footer-page>
      <!-- End Footer -->
    </section>
  </div>
  <!-- ======= Main ======= -->
</template>

<script>
import NavBar from "@/components/layouts/NavBar.vue";
import SideBar from "@/components/layouts/SideBar.vue";
import FooterPage from "@/components/layouts/FooterPage.vue";
// import { computed } from "vue";
// import { useRoute } from "vue-router";

export default {
  name: "dashboard-page",
  components: {
    NavBar,
    SideBar,
    FooterPage,
  },
};
</script>