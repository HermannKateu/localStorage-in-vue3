<template>
  <section class="absolute w-full h-screen flex items-center justify-center bg-black bg-opacity-80 overscroll-none" v-if="show">
    <div class="border border-sky-200 leading-tight bg-white text-center fixed text-black font-bold h-28 rounded px-8 flex flex-col items-center justify-center w-11/12 md:w-fit">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    default: false,
  }
})
</script>