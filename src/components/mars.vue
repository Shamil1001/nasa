<template>
  <div class="main">
    <Header />
    <fragment class="todo">
      <div class="Title">
        <h1>CODE.NASA.GOV</h1>
        <input class="search-filter" type="text" />
      </div>
    </fragment>
    <div class="cards">
      <div v-if="apod.data" class="apod">
        <div class="apodImg">
          <img class="apod-image" :src="this.apod.data.hdurl" />
          <h3>{{ this.apod.data.title }}</h3>
          <h4>{{ this.apod.data.date }}</h4>
        </div>
        <div class="apodData">
          <p class="information">{{ this.apod.data.explanation }}</p>
          <router-link to="/routed">
            <button class="btn btn-primary infobtn" style="background: red">
              See more...
            </button>
          </router-link>
        </div>
      </div>
      <div class="aboutMars">
        <!-- <h2 class="marsTitle">Mars Rover Pictures</h2> -->
        <router-link to="/marsImages">
          <div class="marsBtn"><h2 style="background: red">See more</h2></div>
        </router-link>
        <img src="./mainPage/stephan-khoury-mars-still.jpg" />
        <!-- <img src="../images/planet-volumes-4IrVnSpwk48-unsplash.jpg" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./mainPage/header.vue";
export default {
  name: "Mars",
  components: {
    Header,
  },
  data() {
    return {
      marsInfo: {},
      apod: {},
    };
  },
  mounted() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=7Btd5W7me1bIkphkJ4pBPR3cbuyqV2jNDE1VuMiK"
      )
      .then((resp) => {
        this.apod = { ...resp };
        console.log(this.apod.data.hdurl);
      });
  },
};
// background-image: url(https://www.witf.io/wp-content/uploads/2020/11/iStock-1159238834-1628x1080.jpg);
</script>
<style scoped>
.main {
  background-image: url("../images/projects.jpg"),
    url("../images/projects-bottom.jpg"),
    linear-gradient(0deg, #323d44, transparent 1300px);
  background-size: contain;
  background-repeat: no-repeat, repeat;
  min-height: 100%;
}

.todo h1 {
  font-size: 2em;
  letter-spacing: 28px;
}

.search-filter {
  border: none;
  width: 400px;
  padding-top: 10px;
  padding: 6px 0px 6px 30px;
  background: transparent;
  background-position: center;
  border-bottom: 1px solid #fff;
  background: url("../images/search");
  background-size: 24px 24px;
  background-repeat: no-repeat;
  font-size: 16px;
  color: white;
}

.Title {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 200px;
  color: rgb(139, 22, 22);
}

.apod {
  margin: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.information {
  font-size: 20px;
}
.infobtn {
  font-size: 20px;
}
.apod h3,
h4 {
  color: #c1c6cc;
}
.apodImg h3,
h4 {
  margin-top: 15px;
}
.apod img {
  cursor: pointer;
  width: 90%;
}
h2,
p {
  color: white;
}
.apod-image {
  width: 40%;
}
.aboutMars {
  margin-top: 200px;
}
.aboutMars img {
  width: 100%;
}

.marsTitle {
  position: absolute;
  margin-top: 30%;
  left: 60vw;
}
.marsBtn {
  position: absolute;
  margin-top: 40%;
  left: 60vw;
  width: 200px;
  height: 60px;
  color: white;
}
.marsBtn h2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
