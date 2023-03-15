<template>
  <section
      class="w-full h-full fixed z-50 inset-0 backdrop-blur-[8px] absolute"
  >
    <section class="flex items-center justify-center w-full">
      <CommonSpinner class="absolute w-[104px] h-[104px] bottom-[50%]" />
    </section>
  </section>
</template>

<script setup lang="ts">
import CommonSpinner from "../components/CommonSpinner.vue";
</script>
