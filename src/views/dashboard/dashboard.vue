<template>
  <!-- ======= Start Sidebar ======= -->
  <!-- ======= End Sidebar ======= -->

  <!-- ======= Main ======= -->
  <section class="index_cards">
    <!-- ======= Start navbar ======= -->
    <!-- ======= End navbar ======= -->

    <!-- ======= Start Content ======= -->
    <section class="content">
      <HomePage></HomePage>
      <router-view />
    </section>
    <!-- ======= End Content ======= -->

    <!--start footer -->
    <!--End footer -->
  </section>
  <!-- ======= Main ======= -->
</template>

<script>
import HomePage from "../../components/layouts/HomePage.vue";

export default {
  name: "HomeView",
  components: {
  
    HomePage,
  },
};
</script>
