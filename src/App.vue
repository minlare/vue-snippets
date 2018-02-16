<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>
      <router-link to="/">App</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/grid">Grid</router-link>
      <router-link to="/promo-bar">Promo Bar</router-link>
      <router-link to="/banner-bar">Banner Bar</router-link>
      <router-link to="/form">Form</router-link>
      <router-link to="/gallery">Gallery</router-link>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  max-width: 100px;
}
</style>
