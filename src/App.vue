<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
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
