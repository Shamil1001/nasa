<template>
  <div>
    <header>
      <router-link to="/">
        <img
          src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
        />
      </router-link>
      <ul>
        <li>About us</li>
        <li>Missions</li>
        <li>Galleries</li>
        <li>NASA TV</li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
// background: linear-gradient(
//   to bottom,
//   rgba(33, 33, 33, 1) 100%,
//   rgba(33, 33, 33, 0) 100%
// );
</script>

<style>
header img {
  width: 100px;
  cursor: pointer;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 11;
}
ul {
  display: flex;

  align-items: center;
  gap: 60px;
  margin-right: 30px;
}
li {
  color: white;
  display: inline;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 6px;
}
</style>
