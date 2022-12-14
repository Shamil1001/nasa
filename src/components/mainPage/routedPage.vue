<template>
  <div class="allImages">
    <Header />
    <div class="input-form">
      <div class="mb-3">
        <input
          type="text"
          v-model="text"
          class="form-control"
          placeholder="yyyy-mm-dd"
        />
      </div>
      <button class="search-button" @click="onClick">Search</button>
    </div>
    <div v-if="text.length !== 0" class="todayPicture">
      <div v-if="dayPicture.data" class="dayPicture">
        <h2>{{ this.dayPicture.data.title }}</h2>
        <img class="dayImage" :src="this.dayPicture.data.hdurl" />
        <h4>{{ this.dayPicture.data.date }}</h4>
        <p class="explanation">
          {{ this.dayPicture.data.explanation }}
        </p>
      </div>
    </div>
    <div v-if="text.length === 0" class="todayPicture">
      <div v-if="todayPicture.data" class="dayPicture">
        <h1>{{ this.todayPicture.data.title }}</h1>
        <img class="dayImage" :src="this.todayPicture.data.hdurl" />
        <h2>{{ this.todayPicture.data.date }}</h2>
        <p class="explanation">{{ this.todayPicture.data.explanation }}</p>
      </div>
    </div>
    <!-- <img src="./hero.jpeg" /> -->
  </div>
</template>

<script>
import axios from "axios";
import Header from "./header.vue";
const date = new Date();

export default {
  name: "Routed",
  components: {
    Header,
  },
  methods: {
    onClick() {
      console.log(this.today);

      if (this.text.length > 0) {
        axios
          .get(
            `https://api.nasa.gov/planetary/apod?api_key=7Btd5W7me1bIkphkJ4pBPR3cbuyqV2jNDE1VuMiK${
              "&date=" + this.text
            }`
          )
          .then((resp) => {
            this.dayPicture = { ...resp };
            console.log(this.dayPicture.data.hdurl);
          });
      }
    },
  },
  data() {
    return {
      todayPicture: {},
      dayPicture: {},
      today:
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
      text: "",
      url: "https://api.nasa.gov/planetary/apod?api_key=7Btd5W7me1bIkphkJ4pBPR3cbuyqV2jNDE1VuMiK",
    };
  },
  mounted() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=7Btd5W7me1bIkphkJ4pBPR3cbuyqV2jNDE1VuMiK${
          "&date=" + this.today
        }`
      )
      .then((resp) => {
        this.todayPicture = { ...resp };
      });
  },
};
</script>

<style scoped>
.allImages {
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: white;
  background-image: url("./hero.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(61, 59, 59);
  background-blend-mode: multiply;
  height: 150vh;
}
.input-form {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}
.search-button {
  border-radius: 5px;
  border: 1px solid gray;
  color: white;
  background: rgb(146, 41, 41);
  width: 75px;
  height: 50px;
}
.form-control {
  height: 50px;
  width: 350px;
  font-size: 22px;
  font-weight: 900;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid gray;
}

.todayPicture {
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
}
.dayPicture {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.dayImage {
  width: 100%;
  height: 50vh;
  border-radius: 10px;
}

.explanation {
  color: white;
  font-size: 25px;
  letter-spacing: 2px;
  text-align: justify;
  text-justify: inter-word;
}
</style>
