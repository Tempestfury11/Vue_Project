<template>

    <div class="projects">
        <h1>PROJECTS PAGE</h1>
        <h2>Take a peak at my projects</h2>
        <!-- <div id="workshop" class="container">
          <div class="row justify-content-center"> -->
            <Cards />
          <!-- </div>
          
        </div> -->
    </div>
</template>

<script>
import Cards from "../components/Cards.vue";
export default {
  components: {
    Cards,
  },
};
</script>

<style scoped>
.projects{
    background-color: black;
    padding:0 0 30px 0;
}
h1{
  padding: 70px 0 0 0;
}
#workshop{
  justify-content: center;
  align-items: center;
}
</style>