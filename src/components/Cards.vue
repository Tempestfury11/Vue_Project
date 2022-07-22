<template>
  <article
    class="col-md-6 col-lg-4 col-sm-12"
    v-for="item in AboutArray"
    :key="item.id"
  >
    <section class="card-content">
      <div class="card-content">
        <div class="card">
          <div class="layer"></div>
          <div class="content">
            <div class="image">
              <img :src="item.icon" alt="avatar" id="project-img"/>
            </div>
            <br />
            <div class="details">
              <span>{{ item.title }}</span>
              <br>
              <a id="live" target="_blank" class="text-danger bi bi-github mx-2 fs-1" :href="item.link1"></a>
              <a id="live" target="_blank" class="text-danger bi bi-link-45deg mx-2 fs-1" :href="item.link2"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script scoped>
export default {
  data() {
    return {
      AboutArray: [
        {
          id: 1,
          icon: "https://i.postimg.cc/rwpfW4TP/Screenshot-2022-07-22-144319.png",
          title: "Age To Date",
          link1: "https://github.com/Tempestfury11/Age2Days",
          link2:"https://startling-parfait-d201e2.netlify.app/",
        },
        {
          id: 2,
          icon: "https://i.postimg.cc/zfZjP2cx/areaof-Calculater.png",
          title: "Area Of Triangle",
          link1: "https://github.com/Tempestfury11/AreaOfTriangle",
          link2:"https://famous-melba-ddc9b4.netlify.app/",
        },
        {
          id: 3,
          icon: "https://i.postimg.cc/05MfGJZk/bmi-Calculator.png",
          title: "BMI Calculator",
          link1: "https://github.com/Tempestfury11/BMI",
          link2:"https://chipper-squirrel-a3a947.netlify.app/",
        },
        {
          id: 4,
          icon: "https://i.postimg.cc/8c5xwkK8/calculater.png",
          title: "Calculator",
          link1: "https://github.com/Tempestfury11/Calculator",
          link2:"https://beamish-concha-e3dc78.netlify.app/",
        },
        {
          id: 5,
          icon: "https://i.postimg.cc/kg7m0ChH/trojan.png",
          title: "Mark IV",
          link1: "https://github.com/Tempestfury11/TrojanHorse",
          link2:"https://heartfelt-palmier-4a80fa.netlify.app/",
        },
        {
          id: 6,
          icon: "https://i.postimg.cc/bJhHT6v1/MS.png",
          title: "First Group Project",
          link1: "https://github.com/Emivw/college1",
          link2:"https://groupassignment.netlify.app/index.html",

        },
        {
          id: 7,
          icon: "https://i.postimg.cc/kg7m0ChH/trojan.png",
          title: "Mark 3",
          link1: "https://github.com/Tempestfury11/MarkIII",
          link2:"https://polite-cannoli-e9c0b7.netlify.app/",
        },
        {
          id: 8,
          icon: "https://i.postimg.cc/jdsPCwWd/todoApp.png",
          title: "To Do App",
          link1: "https://github.com/Tempestfury11/todoApp",
          link2:"https://symphonious-cheesecake-7f5d05.netlify.app/",
        },
        {
          id: 9,
          icon: "https://i.postimg.cc/nz8M8N1f/marvel.png",
          title: "Vue Group Project",
          link1: "https://github.com/Emivw/Marvel-Inc-vuex",
          link2:"#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.image {
  width: fit-content;
}
.card-content {
    margin: 50px auto 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 20px;
}

.card-content .card {
    position: relative;
    margin: 0 auto;
    width: 350px;
    background: white;
    color: #00A5FF;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    overflow: hidden;
}
.card-content .card .layer {
    position: absolute;
    top: calc(100% - 2px);
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(#00A5FF, #0004ff);
    z-index: 1;
    transition: 0.5s;
}
.card-content .card:hover .layer {
    top: 0;}
.card-content .card .content {
  position: relative;
  z-index: 2;
}
.card-content .card .content p {
  font-size: 18px;
  line-height: 24px;
}
.card-content .card .content .image {
  width: 100%;
  height: 180px;
  margin: 0 auto;
  overflow: hidden;
    overflow: hidden;
    border: 5px solid navy;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.card-content .card .content .details h2 {
  font-size: 18px;
}
.card-content .card .content .details span {
    color: #03a9f4;
    font-size: 14px;
    transition: 0.5s;
}
.card-content .card:hover .content .details span {
  color: #fff;
}
.card-content .card:hover .content p {
  color: white;
}
</style>