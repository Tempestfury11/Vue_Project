<template>
    <router-view>
    <div>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg bg-danger navbar-light ">
    <!-- Container wrapper -->
        <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="https://i.postimg.cc/nc456nMW/kindpng-2860193-removebg-preview.png" height="1000px" width="1000px">LOGO</a>
      <!-- Toggle button -->
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
        </button>
  
      <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'landing' }">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'about' }">About</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'resume' }">Resume</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'testimonials' }"
                >Testimonials</router-link
              >
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'projects' }">Projects</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'contact' }">Contact</router-link>
            </li>
          </ul>
        </div>
        </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
    </div>
</router-view>
</template>


<script>
    export default {
      name: "Navbar",
    };
</script>
    
    <style scoped>
    li a {
      color: black;
      text-decoration: none;
    }
    ul li{
      padding: 0 10px;
    }
    nav {
      justify-content: space-between;
    }
</style>
