<template>
      <div class="container">
      <div class="row">
        <div
          class="col-md-4 col-lg-4 col-12"
          v-for="item in ResumeArray"
          :key="item.id"
        >
          <section class="card-content">
            <div class="card-content">
              <div class="card">
                <div class="layer"></div>
                <div class="content">
                  <br />
                  <div class="details">
                    <h2>{{ item.title }}</h2>
                    <br />
                    <h4>{{item.duties}}</h4>
                    <h4>{{item.duration}}</h4>
                    <h4>{{item.location}}</h4>
                    <h4>{{item.reference}}</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
          title: "TAKEALOT",
          duties: "Managing customer queries and accounts providing customer service through voice and emails",
          duration: "June 2020 to August 2020",
          location: "Work From Home",
          referances: "Kirsten Klein (062 390 8944)",
        },
        {
          id: 3,
          title: "WOOLWORTHS",
          duties: "Manage stock control, providing customer service and facilitate transactions through sales",
          duration: "November 2018 to January 2019",
          location: "Kroombrom, Athlone",
          referances: "Sharon Matthysen (068 257 8605)",
        },
        {
          id: 4,
          title: "CAPITA",
          duties: "Managing customer queries and accounts providing customer service through voice and emails",
          duration: "January 2021 to May 2021",
          location: "Cape Town",
          referances: "Savanna Ensil (063 155 3915)",
        },
        {
          id: 5,
          title: "MERCHANTS",
          duties: "Manage Inbound and outbound calls, providing customer service through emails, LiveChat and Social Media",
          duration: "January 2019 to June 2020",
          location: "The District Building, Woodstock",
          referances: "Ralton Pillay(084 066 7197)",
        },
        {
          id: 6,
          title: "BES UTILITIES",
          duties: "Managing customer queries and accounts providing customer service through voice and emails",
          duration: "June 2021 to April 2022",
          location: "Bellville",
          referances: "Keenan Stuurman (071 857 0531)",
        },
        {
          id: 7,
          title: "BES UTILITIES",
          duties: "Managing customer queries and accounts providing customer service through voice and emails",
          duration: "June 2021 to April 2022",
          location: "Bellville",
          referances: "Keenan Stuurman (071 857 0531)",
        },
        {
          id: 8,
          title: "BES UTILITIES",
          duties: "Managing customer queries and accounts providing customer service through voice and emails",
          duration: "June 2021 to April 2022",
          location: "Bellville",
          referances: "Keenan Stuurman (071 857 0531)",
        },
        {
          id: 9,
          title: "BES UTILITIES",
          duties: "Managing customer queries and accounts providing customer service through voice and emails",
          duration: "June 2021 to April 2022",
          location: "Bellville",
          referances: "Keenan Stuurman (071 857 0531)",
        },
      ],
    };
  },
};
</script>

<style>
.card {
 width: 190px;
 height: 254px;
 background: rgb(255, 255, 255);
 border-radius: 0.4em;
 box-shadow: 0.3em 0.3em 0.7em #00000015;
 transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
 border: rgb(250, 250, 250) 0.2em solid;
}

.card:hover {
 border: #00a5ff 0.2em solid;
}
</style>