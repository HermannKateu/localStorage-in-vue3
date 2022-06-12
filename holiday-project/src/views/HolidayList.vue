<template>
    <div class="bg-white px-4 flex flex-col font-WorkSans py-20 gap-y-12 py-20 md:max-w-[768px] md:bg-white md:mx-auto  lg:max-w-[1649px]">
        <div class="flex justify-between relative">
            <h1 class="text-gray-800 font-semibold text-3xl">Holidays</h1>
            <router-link to="/create-holiday">
                <span class="text-gray-50 font-medium text-5xl block md:hidden absolute right-0 -top-2">+</span>
            </router-link>
            <router-link to="/create-holiday">
                <MainButton label="Create holiday" class="bg-blue-100 hidden h-14 text-lg w-60 text-white rounded-md py-4 md:block"/>
            </router-link>
        </div>
        <div class="flex gap-y-12 flex-col md:flex-row md:flex-wrap md:gap-x-16 md:w-full md:mx-auto">
            <router-link :to="`/holiday-item/${index}`" class="grow" v-for="(holiday,index) in holidayInfo" :key="index">
                <HolidaysCard :holiday="holiday" />
            </router-link>
        </div>
    </div>
</template>

<script setup>
import HolidaysCard from "../components/HolidaysCard.vue";
import MainButton from "../components/MainButton.vue";
import { holidayInfo } from "../data/holidayInfo";

</script>

<style scoped>

</style>