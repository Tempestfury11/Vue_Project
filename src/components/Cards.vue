<template>
  <article>
    <div class="container">
      <div class="row">
        <div
          class="col-md-4 col-lg-4 col-12"
          v-for="item in ProjectsArray"
          :key="item.id"
        >
          <section class="card-content">
            <div class="card-content">
              <div class="card">
                <div class="layer"></div>
                <div class="content">
                    <img :src="item.icon" alt="avatar" id="project-img" class="img-fluid image"/>
                  <br />
                  <div class="details">
                    <span>{{ item.title }}</span>
                    <br />
                    <a
                      id="live"
                      target="_blank"
                      class="text-primary bi bi-github mx-2 fs-1"
                      :href="item.link1"
                    ></a>
                    <a
                      id="live"
                      target="_blank"
                      class="text-primary bi bi-link-45deg mx-2 fs-1"
                      :href="item.link2"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>

<script scoped>
export default {
  data() {
    return {
      ProjectsArray: [
        {
          id: 1,
          icon: "https://i.postimg.cc/rwpfW4TP/Screenshot-2022-07-22-144319.png",
          title: "Age To Date",
          link1: "https://github.com/Tempestfury11/Age2Days",
          link2: "https://startling-parfait-d201e2.netlify.app/",
        },
        {
          id: 2,
          icon: "https://i.postimg.cc/zfZjP2cx/areaof-Calculater.png",
          title: "Area Of Triangle",
          link1: "https://github.com/Tempestfury11/AreaOfTriangle",
          link2: "https://famous-melba-ddc9b4.netlify.app/",
        },
        {
          id: 3,
          icon: "https://i.postimg.cc/05MfGJZk/bmi-Calculator.png",
          title: "BMI Calculator",
          link1: "https://github.com/Tempestfury11/BMI",
          link2: "https://chipper-squirrel-a3a947.netlify.app/",
        },
        {
          id: 4,
          icon: "https://i.postimg.cc/8c5xwkK8/calculater.png",
          title: "Calculator",
          link1: "https://github.com/Tempestfury11/Calculator",
          link2: "https://beamish-concha-e3dc78.netlify.app/",
        },
        {
          id: 5,
          icon: "https://i.postimg.cc/kg7m0ChH/trojan.png",
          title: "Mark IV",
          link1: "https://github.com/Tempestfury11/TrojanHorse",
          link2: "https://heartfelt-palmier-4a80fa.netlify.app/",
        },
        {
          id: 6,
          icon: "https://i.postimg.cc/bJhHT6v1/MS.png",
          title: "First Group Project",
          link1: "https://github.com/Emivw/college1",
          link2: "https://groupassignment.netlify.app/index.html",
        },
        {
          id: 7,
          icon: "https://i.postimg.cc/kg7m0ChH/trojan.png",
          title: "Mark 3",
          link1: "https://github.com/Tempestfury11/MarkIII",
          link2: "https://polite-cannoli-e9c0b7.netlify.app/",
        },
        {
          id: 8,
          icon: "https://i.postimg.cc/jdsPCwWd/todoApp.png",
          title: "To Do App",
          link1: "https://github.com/Tempestfury11/todoApp",
          link2: "https://symphonious-cheesecake-7f5d05.netlify.app/",
        },
        {
          id: 9,
          icon: "https://i.postimg.cc/nz8M8N1f/marvel.png",
          title: "Vue Group Project",
          link1: "https://github.com/Emivw/Marvel-Inc-vuex",
          link2: "https://62da7ce9b3e78d009c9c448d--luxury-phoenix-954cac.netlify.app/",
        },
      ],
    };
  },
};
</script>

<style scoped>
#project-img {
  object-fit: cover;
}
.card-content {
  margin: 50px auto 50px;
  display: grid;
  grid-gap: 20px;
}

.card-content .card {
  position: relative;
  margin: 0 auto;
  width: 285px !important;
  width: fit-content;
  background: white;
  color: #00a5ff;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 30px;
}
.card-content .card .layer {
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(#00a5ff, #0004ff);
  z-index: 1;
  transition: 0.5s;
}
.card-content .card:hover .layer {
  top: 0;
}
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
