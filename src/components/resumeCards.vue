<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-sm-12 col-md-6 col-lg-6 col-12 d-flex justify-content-center mb-3"
        v-for="item in ResumeArray"
        :key="item.id"
      >
        <div class="card">
          <p>{{ item.title }}</p>
          <p>{{ item.duties }}</p>
          <p>{{ item.duration }}</p>
          <p>{{ item.location }}</p>
          <p>{{ item.referances }}</p>
        </div>
        <br />
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
          duties:
            "Managing customer queries and accounts providing customer service through voice and emails",
          duration: "June 2021 to April 2022",
          location: "Bellville",
          referances: "Keenan Stuurman (071 857 0531)",
        },
        {
          id: 2,
          title: "TAKEALOT",
          duties:
            "Managing customer queries and accounts providing customer service through voice and emails",
          duration: "June 2020 to August 2020",
          location: "Work From Home",
          referances: "Kirsten Klein (062 390 8944)",
        },
        {
          id: 3,
          title: "WOOLWORTHS",
          duties:
            "Manage stock control, providing customer service and facilitate transactions through sales",
          duration: "November 2018 to January 2019",
          location: "Kroombrom, Athlone",
          referances: "Sharon Matthysen (068 257 8605)",
        },
        {
          id: 4,
          title: "CAPITA",
          duties:
            "Managing customer queries and accounts providing customer service through voice and emails",
          duration: "January 2021 to May 2021",
          location: "Cape Town",
          referances: "Savanna Ensil (063 155 3915)",
        },
        {
          id: 5,
          title: "MERCHANTS",
          duties:
            "Manage Inbound and outbound calls, providing customer service through emails, LiveChat and Social Media",
          duration: "January 2019 to June 2020",
          location: "The District Building, Woodstock",
          referances: "Ralton Pillay(084 066 7197)",
        },
        {
          id: 6,
          title: "WOOLWORTHS",
          duties:
            "Manage stock control, providing customer service and facilitate transactions through sales",
          duration: "June 2017 to January 2018",
          location: "Milner Road, Rhondebosch",
          referances: "Nuraan Samsodien (065 943 5988)",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  width: 500px;
  height: 300px;
  background: black;
  border-radius: 0.4em;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(250, 250, 250) 0.2em solid;
}

.card:hover {
  border: #00a5ff 0.2em solid;
}
</style>
