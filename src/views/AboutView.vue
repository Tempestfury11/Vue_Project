<template>
  <div class="about">
    <div class="container">
        <h2 class="text-center"><span>About Me</span></h2>
        <h3 class="text-center"><il>My Name Is Marshalino Jankowski</il></h3>
        <br>
        <div class="row">
          <div class="col-md-4">
            <img class="img-fluid"
              src="https://i.postimg.cc/43HGTqKM/LS2.jpg"
              alt="aboutmeimage" defer
            />
          </div>
          <div id="abouttext" class="col-md-8">
            <p>
              I am a young old soul who enjoys the outdoors, loves sports and plays games with a passion.
              <br>
              I would say that I am honest, trustworthy and caring. 
              <br>
              A kind face in a crowd of strangers who is always willing to lend a friendly hand to anyone in need.
              <br>
               I am motivated to achieve my goals and make my dreams a reality. 
               <br>
               My interest in technology began when I watched the Matrix, played Watchdogs on my Xbox, and browsed the internet.
            </p>
          <p>Birthday : 11/01/1998 </p>
          <p>Contact Number : 0618445578</p>
          <p>Email Address : Swiftyblue11@gmail.com</p>
          <p>Location : Cape Town</p>
          <p>Language : English</p>
          <p>Hobbies : Soccer, Gaming and Music</p>
          <div id="iconsabout">
            <i class="bi fa-2x bi-filetype-html"></i>HTML<br>
            <i class="bi fa-2x bi-filetype-css"></i>CSS<br>
            <i class="bi fa-2x bi-bootstrap"></i>BOOTSTRAP<br>
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
