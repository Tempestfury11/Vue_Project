<template>
  <div class="about">
    <div class="container">
        <h1 class="text-center">About Me</h1>
        <br>
        <div class="row">
          <div class="col-md-4">
            <img class="img-fluid" src="https://i.postimg.cc/4dZrtdx2/suit.jpg"
              alt="aboutmeimage"/>
          </div>
          <div id="abouttext" class="col-md-8">
            <h2>My Name Is Marshalino Jankowski</h2>
            <p>
              I am 24 years old, born, and bred in Cape Town, South Africa. My interests include music, football, and gaming. My skills include playing the guitar, piano and bass. I am very physically active as football is one of my main passions. When I have free time I enjoy listening to music, playing video games like Call of Duty and watching my favorite football teams in the UCL.
              <br>
              When I attended school I founded the first football team named Hope United and captained them until I matriculated. I also participated in athletics, getting my colors thrice for sprinting and long distance. I was also part of the chess team and RCL where I was deputy headboy for 3years.
              <br>
                I have been working since the age of 16 to help my family financially. Once I passed matric I got my first 9-5 job and have worked for various different companies; you may find out more about that on my resume page. Technology has always been an interest of mine growing up. So once I heard about lifechoices and the opportunities they offered, I jumped at it. You may check out my projects in the project page
            </p>
          <p>Contact Number : 0618445578</p>
          <p>Email Address : Swiftyblue11@gmail.com</p>
          <p>Language : English</p>
          <div id="iconsabout">
            <i class="bi fa-2x bi-filetype-html mx-1"></i>HTML
            <i class="bi fa-2x bi-filetype-css mx-1"></i>CSS
            <i class="bi fa-2x bi-filetype-sql mx-1"></i>MYSQL
            <br>
            <i class="bi fa-2x bi-bootstrap mx-1"></i>BOOTSTRAP
            <i class="bi fa-2x bi-filetype-java mx-1"></i>JAVASCRIPT
            <i class="fa-brands fa-2x fa-vuejs mx-1"></i>Vue.js
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
.about img{
  width: 500px;
  height: 600px;
  object-fit: cover;
  border: 1px solid black;
  border-radius:30px ;
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
