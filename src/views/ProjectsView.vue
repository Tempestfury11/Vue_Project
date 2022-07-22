<template>
  <div class="projects">
        <h2 class="text-center"><span>Projects</span></h2>
        <h3 class="text-center"><il>Have A Look At MY Projects Below</il></h3>
        <div v-for="project in projects" :key="project">
          <img :src="project.image" alt="" width="300" height="300"/>
          <p>{{project.title}}</p>
          <p>{{project.techStack}}</p>
          <p>{{project.description}}</p>
        </div>
      <div class="pic">
        <img src="" alt="">
        <div id="overlay">
          <button></button>
          <button></button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          image: "https://i.postimg.cc/yNs1jssn/age2date.png",
          imageALT: "AgeToDate",
          title: "Age2Date",
          techStack: "JavaScript",
          description: "Calculates how old you are based on days",
          githubURL: "https://github.com/Tempestfury11/Age2Days",
          liveProjectURL: "https://startling-parfait-d201e2.netlify.app/",
        },
        {
          image: "https://i.postimg.cc/zfZjP2cx/areaof-Calculater.png",
          imgALT: "AreaOfTriangle",
          title: "AreaOfTriangle",
          techStack: "JavaScript",
          description: "Calculates the area of a triangle",
          githubURL: "https://github.com/Tempestfury11/AreaOfTriangle",
          liveProjectURL: "https://famous-melba-ddc9b4.netlify.app/",
        },
        {
          image: "https://i.postimg.cc/05MfGJZk/bmi-Calculator.png",
          imgALT: "BMIcalculator",
          title: "BmiCalculator",
          techStack: "JavaScript",
          description: "JavaScript project that calculates your bmi",
          githubURL: "https://github.com/Tempestfury11/BMI",
          liveProjectURL: "https://chipper-squirrel-a3a947.netlify.app/",
        },
        {
          image: "https://i.postimg.cc/8c5xwkK8/calculater.png",
          imgALT: "calculator",
          title: "Calculator",
          techStack: "JavaScript",
          description: "Calculator that I designed with JavaScript",
          githubURL: "https://github.com/Tempestfury11/Calculator",
          liveProjectURL: "https://beamish-concha-e3dc78.netlify.app/",
        },
        {
          image: "https://i.postimg.cc/kg7m0ChH/trojan.png",
          imgALT: "mark4",
          title: "Mark IV",
          techStack: "HTML/CSS",
          description: "My fourth attempt at making a portfolio - Mark IV",
          githubURL: "https://github.com/Tempestfury11/TrojanHorse",
          liveProjectURL: "https://heartfelt-palmier-4a80fa.netlify.app/",
        },
        {
          image: "https://i.postimg.cc/bJhHT6v1/MS.png",
          imgALT: "group",
          title: "Group Project",
          techStack: "HTML/CSS",
          description: "First Group Project",
          githubURL: "https://github.com/Emivw/college1",
          liveProjectURL: "https://groupassignment.netlify.app/index.html",
        },
        {
          image: "https://i.postimg.cc/kg7m0ChH/trojan.png",
          imgALT: "mark3",
          title: "Mark 3",
          techStack: "HTML/CSS",
          description: "my third attempt at making a portfolio - Mark 3",
          githubURL: "https://github.com/Tempestfury11/MarkIII",
          liveProjectURL: "https://polite-cannoli-e9c0b7.netlify.app/",
        },
        {
          image: "https://i.postimg.cc/jdsPCwWd/todoApp.png",
          imgALT: "todoapp",
          title: "To Do App",
          techStack: "JavaScript",
          description: "A project that I deisgned with Javascript",
          githubURL: "https://github.com/Tempestfury11/todoApp",
          liveProjectURL: "https://symphonious-cheesecake-7f5d05.netlify.app/",
        },
      ],
    };
  },
};

// function createCard(card) {
//   let createdCard = `<div class="project-card" techStack=${card.techStack} >
//         <img src="${card.image}" alt="${card.imgALT}">
//         <h4>${card.title}</h4>
//         <h5>${card.techStack}</h5>
//         <p>${card.description}</p>
//         <a href="${card.githubURL}">Github</a>
//         <a href="${card.liveProjectURL}">Live</a>
//       </div>
//     `;
//   return createdCard;
// }

// function renderCards() {
//   let projectContainer = document.querySelector(".project-container");
//   for (project of projects) {
//     let card = createCard(project);
//     projectContainer.innerHTML += card;
//   }
// }

// renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("project-card");

  if (category === "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }

  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}
</script>

<style scoped>
.pic {
  width: auto;
}
.pic img {
  border: 2px solid #fff;
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
/*Overlay*/
.pic .overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #E5E5E5;
  display: inline-block;
  overflow: hidden;
  font-size: 30px;
  padding: 160px 0 0 0;
  border-radius: 30px;
  transition: 0.6s;
  opacity: 0;
}
.pic .overlay i {
  padding: 0 25px;
}
.pic:hover .overlay {
  opacity: 1;
  width: 100%;
}
*{
  background: #00A5FF
}
</style>
