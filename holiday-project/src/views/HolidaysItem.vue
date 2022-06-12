<template>
    <div class="px-4 py-16 font-WorkSans md:px-28 md:py-32">
        <div class="flex justify-between">
            <h1 class="text-gray-800 text-3xl font-semibold md:text-5xl">
                Details
            </h1>
            <BinIcon class="h-6 w-7 md:hidden" fill="gray" />
        </div>
        <h2 class="text-gray-800 text-lg font-bold text-center my-6 md:text-2xl md:text-justify">
            {{ holidayItemIndex.date }}
        </h2>
        <div class="flex flex-col gap-y-6 grow md:flex-row md:flex-wrap md:gap-y-20">
            <div class="font-medium md:w-6/12">
                <span class="text-gray md:text-lg">Type</span>
                <h3 class="text-black text-base md:text-xl"> {{ holidayItemIndex.state }} </h3>
            </div>
            <div class="font-medium grow flex flex-col gap-y-2 md:w-6/12">
                <span class="text-gray md:text-lg">Starts</span>
                <div class="flex justify-between md:w-6/12">
                    <h3 class="text-black text-base md:text-xl"> {{ holidayItemIndex.start }} </h3>
                    <CalenderIcon class="h-6 w-7" fill="gray"/>
                </div>
            </div>
            <div class="font-medium grow flex flex-col md:w-6/12">
                <span class="text-gray md:text-lg">Ends</span>
                <div class="flex justify-between md:w-6/12">
                    <h3 class="text-black text-base md:text-xl"> {{ holidayItemIndex.end }} </h3>
                    <CalenderIcon class="h-6 w-7" fill="gray"/>
                </div>
            </div>
            <div class="md:w-6/12 grow">
                <span class="text-gray md:text-lg">Description</span>
                <h3 class="text-black text-base md:text-xl"> {{ holidayItemIndex.description}} </h3>
            </div>
            <div class="md:w-6/12">
                <span class="text-gray md:text-lg">Return</span>
                <h3 class="text-black text-base md:text-xl">Friday, 12 febuary 2022</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import BinIcon from "../assets/Holidays-Icons/BinIcon.vue";
import CalenderIcon from "../assets/Holidays-Icons/CalenderIcon.vue";
import { holidayInfo } from "../data/holidayInfo.ts";
import { useRoute } from 'vue-router';

const route = useRoute()
let holidayItemIndex;
    holidayItemIndex = parseInt(route.params.id);
    holidayItemIndex = holidayInfo[holidayItemIndex];
</script>

<style scoped>

</style>