<template>
  <div class="about">
    <div class="container">
      <h1 class="text-center">ABOUT ME</h1>
      <br>
      <div class="row">
        <div class="col-md-4 pt-4">
          <img class="img-fluid" src="https://i.postimg.cc/sx9FKkBV/Marshalino-2.jpg" alt="aboutmeimage" />
        </div>
        <div id="abouttext" class="col-md-8">
          <h2 id="heading">My Name Is Marshalino Jankowski</h2>
          <p>
            I am 24 years old, born, and bred in Cape Town, South Africa. My interests include music, football and
            gaming. My skills include playing the guitar and piano. I am physically active as football is one
            of my main passions. When I have free time I enjoy playing video games like Call of Duty
            and watching my favorite football teams in the UCL
            <br>
            When I attended school I founded the first football team named Hope United and captained them until I
            matriculated. I also participated in athletics, getting my colors for sprinting and long distance. I
            was also part of the chess team and RCL where I was deputy headboy for 3years
            <br>
            I have been working since the age of 16. Once I passed matric I got my first 9-5 job and have worked for
            various different companies, you may find out more about that on my resume page. Technology has always been
            an interest of mine growing up. So once I heard about lifechoices and the opportunities they offered, I
            jumped at it. You may check out my projects in the project page
          </p>
          <p><i class="fa-solid fa-mobile-screen"></i>0618445578</p>
          <p><i class="fa-regular fa-envelope"></i>Swiftyblue11@gmail.com</p>
          <p><i class="fa-solid fa-headset"></i>English</p>
          <p><i class="fa-regular fa-calendar-days"></i>11/01/1998</p>
          <p><i class="fa-solid fa-house"></i>Athlone</p>
          <a target="_blank" href="https://github.com/Tempestfury11" class="button button2">GitHub</a>
        </div>
        <div class="container">
          <div class="row">
            <div class="col pt-4">
              <div id="iconsabout">
                <h2 id="heading">My Techical Skills</h2>
                <i class="bi fa-2x bi-filetype-html mx-1"></i><span>HTML</span>
                <br>
                <i class="bi fa-2x bi-filetype-css mx-1"></i><span>CSS</span>
                <br>
                <i class="fa-brands fa-2x fa-bootstrap mx-1"></i><span>BOOTSTRAP</span>
                <br>
                <i class="bi fa-2x bi-filetype-sql mx-1"></i><span>MYSQL</span>
                <br>
                <i class="bi fa-2x bi-filetype-java mx-1"></i><span>JAVASCRIPT</span>
                <br>
                <i class="fa-brands fa-2x fa-vuejs mx-1"></i><span>VUE.JS</span>
                <br>
                <i class="fa-brands fa-2x fa-node-js mx-1"></i><span>NODE.JS</span>
                <h2 id="heading">My Soft Skills</h2>
                <i class="fa-solid fa-2x fa-ear-listen mx-1"></i><span>Active Listening</span>
                <br>
                <i class="fa-solid fa-2x fa-magnifying-glass mx-1"></i><span>Problem Solving</span>
                <br>
                <i class="fa-solid fa-2x fa-bandage mx-1"></i><span>Conflict Management</span>
                <br>
                <i class="fa-solid fa-2x fa-medal mx-1"></i><span>Self-Management</span>
                <br>
                <i class="fa-solid fa-2x fa-up-right-and-down-left-from-center mx-1"></i><span>Managing Change</span>
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about {
  background-color: black;
  padding: 50px 0 50px 0;
}

.about img {
  width: 500px;
  height: 750px;
  object-fit: cover;
  border: 5px solid white;
  border-radius: 20px;
}

#abouttext {
  padding: 30px 0 0 0;
}

.img-fluid {
  border-radius: 2px;
  border: 3px solid white;
}

.button2 {
  border: none;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5px;
}

.button2 {
  background-color: #00a5ff;
  color: white;
}

#heading {
  color: #00a5ff
}
</style>
