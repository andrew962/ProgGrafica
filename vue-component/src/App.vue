<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello/>
    <cd/>
    <Principio/>
  </div>
</template>

<script>
import cd from './components/Cd.vue'
import hello from './components/HelloWorld.vue'
import Principio from './components/Principio.vue'

export default {
  name: 'App',
  components:{
    hello,
    cd,
    Principio
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
