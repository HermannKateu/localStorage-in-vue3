<template>
  <div :class="['flex items-center justify-center font-bold', isCurrent ? 'bg-sky-900 text-white' : 'bg-sky-300']">
    {{label}}
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: false,
  },
  isCurrent: {
    type: Boolean,
    default: false,
  }
})
</script>

<style scoped>
div {
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
}
</style>