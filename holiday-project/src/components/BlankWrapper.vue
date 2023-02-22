<template>
  <img :src="`src/assets/holidays-foto/${image}`" alt="holiday-image" class="flex h-[500px] md:h-[540px]"/>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";

const image = ref<string | undefined>("");
const windowWidth = ref(window.innerWidth);

const getImageLink = (): string => {
  if (windowWidth.value < 431) return "holiday-mobile.png";
  return "holiday-web.png";
};

watchEffect(() => {
  image.value = getImageLink();
  window.onresize = () => {
    windowWidth.value = window.innerWidth;
    image.value = getImageLink();
  };
});
</script>
