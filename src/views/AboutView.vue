<template>
  <div class="about">
    <div class="container">
        <h2 class="text-center"><span>About Me</span></h2>
        <h3 class="text-center"><il>My Name Is Marshalino Jankowski</il></h3>
        <br>
        <div class="row">
          <div class="col-md-4">
            <img class="img-fluid"
              src="https://i.postimg.cc/LhKL99ZJ/Whatsapp.jpg"
              alt="aboutmeimage"/>
          </div>
          <div id="abouttext" class="col-md-8">
            <p>
              I am 24 years old born and bred in Cape Town, South Africa. My interests include music, football and gaming. 
              My skills include playing the guitar, piano and bass. I am very physically active as football is one of my main passions. When I have free time I enjoy listening to music, playing video games like Call of Duty and watching  my favourite football teams in the UCL. 
              <br>
              When I attened school I founded the first football team named Hope United and captained them until I matricualated.
              I also partipated in athletics getting my colors trice for sprinting and long distance.
              I was also part of the chess team and RCL where I was deputy headboy for 3years.
              <br>
              I have been working since the age of 16 to help my family financally. Once I passed matric I got my first 9-5 job and have worked for various different companies you may find out more about that on my resume page.               Technology has always been an interest of mine growing up. So once I heard about lifechoices and the opportunity they offered I jumped at its. You may check out my projeccts in the project page
            </p>
          <p>Contact Number : 0618445578</p>
          <p>Email Address : Swiftyblue11@gmail.com</p>
          <p>Language : English</p>
          <div id="iconsabout">
            <i class="bi fa-2x bi-filetype-html"></i>HTML
            <i class="bi fa-2x bi-filetype-css"></i>CSS
            <i class="bi fa-2x bi-filetype-sql"></i>MYSQL
            <br>
            <i class="bi fa-2x bi-bootstrap"></i>BOOTSTRAP
            <i class="bi fa-2x bi-filetype-java"></i>JAVASCRIPT
            <i class="fa-brands fa-2x fa-vuejs"></i>Vue.js
          </div>
              <button id="about-link" target="_blank" href="https://github.com/Tempestfury11" class="button button2">GitHub</button>
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
.about{
  background-color: #00A5FF;
  padding: 50px 0 50px 0;
}

#abouttext{
  padding: 30px 0 0 0;
}

.img-fluid {
  border-radius: 2px;
  border: 3px solid white;
}

.button2 {
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button2 {
  background-color: navy; 
  color: white; 
  border: 4px solid #03a9f4;
}

.button2:hover {
  background-color: red;
  color: white;
}
</style>
