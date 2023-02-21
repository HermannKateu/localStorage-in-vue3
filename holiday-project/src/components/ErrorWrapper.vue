<template>
  <span data-test="span-error" class="text-red-900 font-normal font-outfit text-sm">
    {{ message }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>