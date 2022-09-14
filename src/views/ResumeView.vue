<template>
    <div class="resume">
      <div class="container">
        <h1 class="text-center">MY RESUME</h1>
        <h2>My Work & Education Experience</h2>
        <div class="row">
          <div class="col-12">
            <div class="school">
              <h5 id="heading">Alexander Sinton High School</h5>
              <p>I started my highschool career off at Alexander Sinton High, based in Crawford. I was only there for a year however I learned how to play guitar in my time there</p>
              <h5 id="heading">School of Hope</h5>
              <p>For the rest of my highschool career, I attended School of Hope, based in Observatory. I was a part of the RCL for 4years and Deputy Headboy for 3years. I started the first football team and captained them until I matriculated</p>
          </div>
          </div>
          <div id="jobs">
            <resumeCards/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import resumeCards from '../components/resumeCards.vue';
export default {
    components: { resumeCards }
};
</script>

<style scoped>
.resume {
  background-color: black;
  padding: 0 0 30 0;
}
.resume h1{
  padding: 70px 0 0 0;
}
.school{
  background-color: black;
  color: white;
  margin: 20px 20px 20px 20px;
  padding: 20px 0 20px 0;
  border: 0.2em solid #00a5ff;
  border-radius: 20px
}
#heading{
  color: #00a5ff;
}
.cards{
  margin: 0 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: 2px solid #00a5ff;
  border-radius: 20px;
}
h2{
  color:#00a5ff;
}
#jobs{
    text-align: center;
    align-items: center;
    justify-content: center;
}
</style>