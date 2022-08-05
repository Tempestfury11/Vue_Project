<template>
    <header>
      <Navbar />
    </header>
  <router-view></router-view>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
*{
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  overflow-x: hidden;
}
h1{
  padding: 30px 0 0 0;
}
/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: black;
} */
</style>
