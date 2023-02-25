<template>
  <div>
    <button type="submit" class="font-bold w-full outline-none">
      {{ label }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    require: true,
  },
});
</script>
