<template>
  <div class="testimonials">
    <h1 class="text-white">MY TESTIMONIALS</h1>
    <div v-if="test" class="testimonial container">
      <div class="card" v-for="info in test" :key="info">
        <div class="layer"></div>
        <div class="content">
          <p>{{info.text}}</p>
          <div class="image">
            <img :src="info.img" alt="avatar" />
          </div>
          <br />
          <div class="details">
            <h2>{{info.name}}</h2>
            <span>{{info.type}}</span>
            <h2>{{info.email}}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    test(){
    return this.$store.state.test
  }
  }
};
</script>

<style scoped>
  h1{
    color: pink;
  }
.testimonials {
  color: black;
  background-color: black;
  padding: 0 0 30px 0;
}
.testimonials h1 {
  padding: 70px 0 0 0;
}

.testimonial {
  margin: 50px auto 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}
.testimonial .card {
  position: relative;
  margin: 0 auto;
  background: white;
  color: #00a5ff;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 30px;
}
.testimonial .card .layer {
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(#00a5ff, #0004ff);
  z-index: 1;
  transition: 0.5s;
}
.testimonial .card:hover .layer {
  top: 0;
}
.testimonial .card .content {
  position: relative;
  z-index: 2;
}
.testimonial .card .content p {
  font-size: 18px;
  line-height: 24px;
}
.testimonial .card .content .image {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid navy;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.testimonial .card .content .details h2 {
  font-size: 18px;
}
.testimonial .card .content .details span {
  color: #00a5ff;
  font-size: 14px;
  transition: 0.5s;
}
.testimonial .card:hover .content .details span {
  color: #fff;
}
.testimonial .card:hover .content p {
  color: white;
}
#heading{
  color: #00a5ff;
}
</style>
