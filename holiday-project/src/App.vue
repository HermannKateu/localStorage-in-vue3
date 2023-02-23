<template>
  <div>
    <HeaderSection class="sticky top-0 z-50" @show-details="showShowDetails = true"/>
    <section class="flex w-full">
      <router-view :class="['z-30 overscroll-x-none scroll', showShowDetails ? 'w-10/12' : 'w-full']"></router-view>
      <SideWrapper v-if="showShowDetails" @close="showShowDetails = false"/>
    </section>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import HeaderSection from "../src/components/HeaderSection.vue";
import SideWrapper from "./components/SideWrapper.vue";
import {useRoute} from "vue-router";

const showShowDetails = ref<boolean>(false);
const route = useRoute();

watch(() => route.name, (newRoot) => {
  if (newRoot) showShowDetails.value = false;
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
