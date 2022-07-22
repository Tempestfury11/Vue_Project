<template>
    <router-view>
    <div id="nav">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg bg-danger navbar-light ">
    <!-- Container wrapper -->
        <div class="container-fluid">
          <!-- Toggle button -->
        <a class="navbar-brand" href="#"><img src="https://i.postimg.cc/mgq855Rk/Screenshot-2022-07-22-110203-removebg-preview.png"></a>
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
        </button>
  
      <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="bar" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'landing' }"><i class="bi bi-house-door-fill"></i>HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'about' }"><i class="bi bi-file-person-fill"></i>ABOUT</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'resume' }"><i class="bi bi-file-earmark-richtext-fill"></i>RESUME</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'testimonials' }"
                ><i class="bi bi-hand-thumbs-up-fill"></i>TESTIMONIALS</router-link
              >
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'projects' }"><i class="bi bi-hammer"></i>PROJECTS</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'contact' }"><i class="bi bi-phone-fill"></i>CONTACT</router-link>
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

    #nav {
      overflow-x :hidden;
    }
    ul li{
      padding: 0 10px;
    }
    .nav-item{
      font-size: larger;
      justify-content: center;
    }
</style>
