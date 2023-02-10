<template>
  <div class="main">
    <Header />
    <fragment class="todo">
      <div class="Title">
        <h1>CODE.NASA.GOV</h1>
        <input class="search-filter" type="text" />
      </div>
    </fragment>
  </div>
  <div class="cards">
    <div class="picture">
      <img v-if="apod.data" class="apod-image" :src="this.apod.data.hdurl" />
      <div v-if="apod.data" class="apod">
        <div class="apodImg">
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
    </div>
    <div class="aboutMars">
      <div v-if="apod.data" class="card-body">
        <img src="./mainPage/stephan-khoury-mars-still.jpg" />
        <router-link to="/marsImages">
          <div class="marsBtn"><h2>See more</h2></div>
        </router-link>
      </div>
      <!-- <div class="card">
        <div class="card-header"><h3>Mars Pictures</h3></div>
      </div> -->
    </div>
  </div>
  <Footer />
</template>

<script>
import axios from "axios";
import Header from "./mainPage/header.vue";
import Footer from "./mainPage/footer.vue";
export default {
  name: "Mars",
  components: {
    Header,
    Footer,
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
// background: linear-gradient(270deg, #2a4c54 0%, #061072 100%);

// background-image: url(https://www.witf.io/wp-content/uploads/2020/11/iStock-1159238834-1628x1080.jpg);
</script>
<style scoped>
@font-face {
  font-family: Tittilum;
  src: url("../assets/fonts/tittilium/TitilliumWeb-Bold.ttf");
}
.main {
  background-image: url("../images/projects.jpg"),
    linear-gradient(0deg, #323d44, transparent 1300px);
  background-size: cover;
  background-repeat: no-repeat;
  height: 150vh;
  font-family: Tittilum;
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
  display: flex;
  flex-direction: column;
}
.information {
  font-size: 20px;
}
.infobtn {
  font-size: 20px;
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-blend-mode: multiply;
  background-image: url("../images/projects-bottom.jpg");
  background-size: cover;
  background-repeat: repeat;
}

.card {
  background-color: rgb(31, 63, 93);
  opacity: 100%;
  width: 45vw;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.picture {
  width: 100%;
  height: 70vh;
  color: white;
  display: flex;
  flex-direction: row;
}

.picture .apod-image {
  margin: 40px;
  height: 500px;
  width: 120vw;
  border-radius: 5px;
}

.apod h3,
h4 {
  margin-top: 40px;
  color: #fff;
}

.apod img {
  cursor: pointer;
  width: 100%;
}

.apodData {
  width: 90%;
}
h2,
p {
  color: white;
  letter-spacing: 3px;
  text-align: justify;
}

.aboutMars {
  margin: 40px;
}

.aboutMars img {
  width: 50%;
}

.marsTitle {
  position: absolute;
  margin-top: 30%;
  left: 60vw;
}
.marsBtn {
  width: 200px;
  height: 60px;
  color: white;
}
.marsBtn h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: transparent;
}
</style>
