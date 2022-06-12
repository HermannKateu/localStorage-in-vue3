<template>
    <div class="px-6 flex flex-col gap-y-20 py-16 font-WorkSans md:py-32">
        <h1 class="text-gray-800 text-3xl font-semibold md:text-5xl md:hidden">
            Holiday
        </h1>
        <div class="md:mx-auto">
           <img src="../assets/holidays-foto/no-holiday.png" alt="image" class="md:h-[500px]">
        </div>
        <div class="flex flex-col gap-y-6">
            <h2 class="text-gray-300 font-semibold text-base text-center md:text-xl">
                No holiday has been created
            </h2>
            <router-link to="/create-holiday">
                <MainButton label="Create holiday" class="mx-auto w-6/12 text-white bg-blue-100 h-12 font-bold text-lg flex rounded-md md:w-4/12 md:text-xl"/>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import MainButton from "../components/MainButton.vue";
</script>

<style scoped>

</style>