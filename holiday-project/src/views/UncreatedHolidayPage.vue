<template>
  <div class="px-6 flex flex-col gap-y-20 py-16 font-WorkSans md:py-32">
    <h1
      class="text-gray-800 text-3xl flex justify-center font-semibold md:text-5xl md:hidden"
    >
      Holiday
    </h1>
    <div class="w-full md:w-full md:mx-auto">
      <NoHoliday
        class="h-42 flex w-full md:w-full md:h-[650px]"
        data-test="no-holiday-image"
      />
    </div>
    <div class="flex flex-col gap-y-6">
      <h2 class="text-gray-300 font-semibold text-base text-center md:text-xl">
        No holiday has been created
      </h2>
      <router-link to="/create-holiday">
        <MainButton
          label="Create holiday"
          class="mx-auto w-6/12 text-white bg-blue-100 h-12 font-bold text-lg flex rounded-md md:w-4/12 md:text-xl"
          data-test="create-holiday-button"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import MainButton from "../components/MainButton.vue";
import NoHoliday from "../assets/holidays-foto/NoHoliday.vue";
</script>

<style scoped></style>
