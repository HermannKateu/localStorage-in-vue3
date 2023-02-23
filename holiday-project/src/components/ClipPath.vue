<template>
  <div :class="['flex items-center justify-center font-bold', isCurrent ? 'bg-sky-900' : 'bg-sky-300']">
    {{label}} <Home />
  </div>
</template>

<script setup lang="ts">
import Home from "../assets/icons/Home.vue";

defineProps({
  label: {
    type: String,
    required: false,
  },
  isCurrent: {
    type: Boolean,
    default: false,
  }
});
</script>

<style scoped>
div {
  clip-path: polygon(0% 0%, 75% 0%, 101% 50%, 75% 100%, 0% 100%);
}
</style>