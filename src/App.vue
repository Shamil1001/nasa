<template>
  <!-- <div class="main"> -->
  <router-view />
  <!-- </div> -->
</template>

<script>
// import Header from "./components/mainPage/header.vue";
// import FirstPage from "./components/mainPage/firstPage.vue";
// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    // Header,
    // VueSlickCarousel,
    // FirstPage,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: Tittilum;
  src: url("./assets/fonts/tittilium/TitilliumWeb-Bold.ttf");
}
.main {
  font-family: Tittilum;
  height: 100%;
}
</style>
