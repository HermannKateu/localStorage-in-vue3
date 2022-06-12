<template>
  <div>
    <HeaderSection class="sticky top-0 z-10"/>
    <router-view class="z-30"></router-view>
  </div>
</template>

<script setup>
import HeaderSection from "../src/components/HeaderSection.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
