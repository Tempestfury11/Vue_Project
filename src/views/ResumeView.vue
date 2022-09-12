<template>
    <div class="resume">
      <div class="container">
        <h1 class="text-center">MY RESUME</h1>
        <h2>My Work & Education Experience</h2>
        <div class="row">
          <div class="col-12">
            <div class="school">
            <div>
              <h5 id="heading">Alexander Sinton High School</h5>
              <i>I started my highschool career off at Alexander Sinton High, based in Crawford. I was only there for a year however I learned how to play guitar in my time there</i>
              <h5 id="heading">School of Hope</h5>
              <i>For the rest of my highschool career, I attended School of Hope, based in Observatory. I was a part of the RCL for 4years and Deputy Headboy for 3years. I started the first football team and captained them until I matriculated</i>
            </div>
          </div>
          </div>
          <div id="jobs" class="col-md-6" v-for="item in ResumeArray"
          :key="item.id">
            <div class="cards">
              <p>
                <h2>{{item.title}}</h2>
                <h4>Duties</h4>{{item.duties}}
                <h4>Duration</h4>{{item.duration}}
                <h4>Location</h4>{{item.location}}
                <h4>References</h4>{{item.reference}}
              </p>
            </div>
            <br>
              <div class="cards">
                <p>
                  <h2>{TAKEALOT}</h2>
                  <h4>Duties</h4>Managing customer queries and accounts providing customer service through voice and emails
                  <h4>Duration</h4>June 2020 to August 2020
                  <h4>Location</h4>Work From Home
                  <h4>References</h4>Kirsten Klein (062 390 8944)
                </p>
              </div>
              <br>
            <div class="cards">
              <p>
              <h2>WOOLWORTHS</h2>
              <h4>Duties</h4>
              <h4>Duration</h4>
              <h4>Location</h4>
              <h4>References</h4>
              </p>
            </div>
          </div>
          <br>
          <div id="jobs" class="col-md-6">
            <div class="cards">
              <p>
                <h2>CAPITA</h2>
                <h4>Duties</h4>
                <h4>Duration</h4>
                <h4>Location</h4>
                <h4>References</h4>
              </p>
            </div>
            <br>
            <div class="cards">
              <p>
                <h2></h2>
                <h4>Duties</h4>
                <h4>Duration</h4>
                <h4>Location</h4>
                <h4>References</h4>
              </p>
            </div>
            <br>
            <div class="cards">
              <p>
                <h2>WOOLWORTHS</h2>
                <h4>Duties</h4> Manage stock control, providing customer service and facilitate transactions through sales.
                <h4>Duration</h4>June 2017 to January 2018
                <h4>Location</h4>Milner Road, Rhondebosch
                <h4>References</h4>Nuraan Samsodien (065 943 5988)
              </p>
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ResumeArray: [
        {
          id: 1,
          title: "BES UTILITIES",
          duties: "Managing customer queries and accounts providing customer service through voice and emails",
          duration: "June 2021 to April 2022",
          location: "Bellville",
          referances: "Keenan Stuurman (071 857 0531)",
        },
        {
          id: 2,
          title: "https://i.postimg.cc/zfZjP2cx/areaof-Calculater.png",
          duties: "Area Of Triangle",
          duration: "https://github.com/Tempestfury11/AreaOfTriangle",
          location: "https://famous-melba-ddc9b4.netlify.app/",
          referances:"",
        },
        {
          id: 3,
          title: "https://i.postimg.cc/05MfGJZk/bmi-Calculator.png",
          duties: "BMI Calculator",
          duration: "https://github.com/Tempestfury11/BMI",
          location: "https://chipper-squirrel-a3a947.netlify.app/",
          referances:"",
        },
        {
          id: 4,
          title: "https://i.postimg.cc/8c5xwkK8/calculater.png",
          duties: "Calculator",
          duration: "https://github.com/Tempestfury11/Calculator",
          location: "https://beamish-concha-e3dc78.netlify.app/",
          referances:"",
        },
        {
          id: 5,
          title: "https://i.postimg.cc/kg7m0ChH/trojan.png",
          duties: "Mark IV",
          duration: "https://github.com/Tempestfury11/TrojanHorse",
          location: "https://heartfelt-palmier-4a80fa.netlify.app/",
          referances:"",
        },
        {
          id: 6,
          title: "https://i.postimg.cc/dtypVtx1/kitarmy.png",
          duties: "Kit Army",
          duration: "https://github.com/Reagan701/FullstackProject",
          location: "https://kitarmy.netlify.app/",
          referances:"",
        },
        {
          id: 7,
          title: "https://i.postimg.cc/RhpmxMXm/tempestgaming.png",
          duties: "Tempest Gaming",
          duration: "https://github.com/Tempestfury11/CapstoneFrontEnd",
          location: "https://tempestgaming-2b191.web.app/",
          referances:"",
        },
        {
          id: 8,
          title: "https://i.postimg.cc/jdsPCwWd/todoApp.png",
          duties: "To Do App",
          duration: "https://github.com/Tempestfury11/todoApp",
          location: "https://symphonious-cheesecake-7f5d05.netlify.app/",
          referances:"",
        },
        {
          id: 9,
          title: "https://i.postimg.cc/nz8M8N1f/marvel.png",
          duties: "Vue Group Project",
          duration: "https://github.com/Emivw/Marvel-Inc-vuex",
          location: "https://62da7ce9b3e78d009c9c448d--luxury-phoenix-954cac.netlify.app/",
          referances:"",
        },
      ],
    };
  },
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
  border: 2px solid #00a5ff;
  border-radius: 20px
}
#heading{
  color: #00a5ff;
}
#jobs{
  padding: 30px 0 30px 0;
  text-align:center;
  justify-content: center;
  align-items: center;
}
.cards{
  margin: 0 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: 2px solid #00a5ff;
  border-radius: 20px;
}
ul{
  list-style: none;
}
h2{
  color:#00a5ff;
}
</style>