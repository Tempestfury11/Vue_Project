<template>
    <header>
      <Navbar />
    </header>
  <router-view></router-view>
  <main>
    <LandingView />
    <AboutView />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import LandingView from "./views/LandingView.vue";
import AboutView from "./views/AboutView.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    LandingView,
    AboutView,
    Footer,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
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
