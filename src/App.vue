<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <VueLeaflet msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import VueLeaflet from './components/VueLeaflet.vue'

export default {
  name: 'App',
  components: {
    VueLeaflet
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
