<template>
  <div id="app">
    <barra></barra>
    <transition name="animated.css"
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import login from './components/login.vue'
import barra from './components/barra.vue'
export default {
  name: 'App',
  components:{
    login,
    barra
  }
}
</script>

<style>
</style>


