<template>
  <div class="marss">
    <Header />
    <div class="selection">
      <p>Select Rover:</p>
      <select
        @change="selectRover"
        class="form-select"
        placeholder="Spirit"
        aria-label="Default select example"
      >
        <option value="1">curiosity</option>
        <option value="2">opportunity</option>
        <option value="3">spirit</option>
        <option value="4">perseverance</option>
      </select>
      <p>Select Camera:</p>
      <select
        @change="selectCam"
        class="form-select"
        placeholder="Spirit"
        aria-label="Default select example"
      >
        <option :class="rover === 'Curiosity' ? 'cr' : 'cb'" value="1">
          FHAZ
        </option>
        <option :disabled="rover === 'curiosity' ? true : false" value="2">
          RHAZ
        </option>
        <option value="3">MAST</option>
        <option value="4">CHEMCAM</option>
        <option value="5">MAHLI</option>
        <option value="6">MARDI</option>
        <option value="7">NAVCAM</option>
        <option value="8">PANCAM</option>
        <option value="9">MINITES</option>
      </select>
      <button
        @click="onSubmit"
        class="btn btn-primary btn-sm"
        style="background: blue"
      >
        Search
      </button>
    </div>
    <div class="marsImg">
      <div v-for="(item, index) in marsImg" :key="index">
        <img
          v-if="marsImg[index]"
          class="apod-image"
          :src="this.marsImg[index].img_src"
        />
      </div>
    </div>
  </div>
</template>
<!-- v-for="n in 4" -->

<script>
import axios from "axios";
import Header from "./mainPage/header.vue";
export default {
  name: "MarsImages",
  components: {
    Header,
  },
  methods: {
    selectRover(e) {
      var id = e.target.value;
      var name = e.target.options[id - 1].text;
      this.rover = name;
      // console.log(name);
    },
    selectCam(e) {
      var camId = e.target.value;
      var cam = e.target.options[camId - 1].text;
      this.cam = cam;
      // console.log(this.cam);
    },
    onSubmit() {
      console.log(this.rover);

      if (this.rover === "curiosity") {
        axios
          .get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=7Btd5W7me1bIkphkJ4pBPR3cbuyqV2jNDE1VuMiK`
          )
          .then((resp) => {
            // console.log(resp);
            const newRover = resp.data.photos.filter((item) => {
              // console.log(item.camera.name);
              return item.camera.name === this.cam;
            });
            // console.log(newRover.data.photos);
            console.log(newRover.length);
            this.marsImg = { ...newRover };
            console.log(newRover);
          });
      }
      if (this.rover === "opportunity") {
        axios
          .get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=7Btd5W7me1bIkphkJ4pBPR3cbuyqV2jNDE1VuMiK`
          )
          .then((resp) => {
            // console.log(resp);
            const newRover = resp.data.photos.filter((item) => {
              // console.log(item.camera.name);
              return item.camera.name === this.cam;
            });
            // console.log(newRover.data.photos);
            this.marsImg = { ...newRover };
            console.log(this.marsImg[5].id);
            console.log(newRover);
          });
      }
      if (this.rover === "spirit") {
        axios
          .get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=7Btd5W7me1bIkphkJ4pBPR3cbuyqV2jNDE1VuMiK`
          )
          .then((resp) => {
            // console.log(resp);
            const newRover = resp.data.photos.filter((item) => {
              // console.log(item.camera.name);
              return item.camera.name === this.cam;
            });
            // console.log(newRover.data.photos);
            this.marsImg = { ...newRover };
            console.log(this.marsImg[5].id);
            console.log(newRover);
          });
      }
      if (this.rover === "perseverance") {
        axios
          .get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=1000&api_key=7Btd5W7me1bIkphkJ4pBPR3cbuyqV2jNDE1VuMiK`
          )
          .then((resp) => {
            // console.log(resp);
            const newRover = resp.data.photos.filter((item) => {
              // console.log(item.camera.name);
              return item.camera.name === this.cam;
            });
            // console.log(newRover.data.photos);
            this.len = newRover.length;
            this.marsImg = { ...newRover };
            console.log(this.marsImg[5].id);
            console.log(newRover);
          });
      }
    },
  },
  data() {
    return {
      marsImg: {},
      rover: "",
      cam: "",
      len: 0,
    };
  },
  // mounted() {
  //   console.log(this.cam);
  //   // axios
  //   //   .get(
  //   //     `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=7Btd5W7me1bIkphkJ4pBPR3cbuyqV2jNDE1VuMiK`
  //   //   )
  //   //   .then((resp) => {
  //   //     this.marsImg = { ...resp };
  //   //     console.log(this.marsImg.data);
  //   //   });
  // },
};
</script>
<style scoped>
.marss {
  background-image: url("./daniele-colucci-OtXJhYjbKeg-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgb(124, 121, 121);
  background-blend-mode: multiply;
  width: 100%;
  height: 100vh;
}
.selection p {
  color: white;
  width: 20%;
  height: 12px;
  margin-bottom: 5px;
}

.selection .form-select {
  width: 15%;
  min-width: 200px;
}
.selection button {
  margin-top: 20px;
  height: 40px;
  width: 7%;
}

.selection {
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 15px;
}
.marsImg {
  margin: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
.marsImg img {
  width: 100%;
  height: 350px;
}
</style>
