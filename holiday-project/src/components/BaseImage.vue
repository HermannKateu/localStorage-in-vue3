<template>
  <img :src="getImageUrl" alt="image" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

const getImageUrl = computed<string>((): string => {
  return new URL(`../assets/images/${props.path}`, import.meta.url).href;
});
</script>
