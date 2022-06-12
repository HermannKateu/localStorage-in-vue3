<template>
    <header class="flex flex-col p-4 gap-y-4 bg-white md:br-gray-400 shadow-lg shadow-gray-200 md:h-32">
        <div class="flex justify-between block md:hidden">
            <span class="font-Roboto font-semibold text-2xl"> {{ currentTime }} </span>
            <!-- <SvgCollection /> -->
        </div>
        <div class="flex justify-between p-2 font-WorkSans">
            <div  :class="!isLogin && 'styleTitle'">
               <h1 class="text-gray-300 font-bold  text-4xl leading-tight md:flex md:items-center md:text-5xl">Logo</h1>
               <span class="text-gray-700 text-sm md:text-lg" v-show="isLogin"> {{ currentDate }} </span>
            </div>
            <ContactIcon class="w-10 h-9" fill="gray" v-show="isLogin"/>
        </div>
    </header>
</template>

<script setup>
import ContactIcon from "../assets/Holidays-Icons/ContactIcon.vue";
import SvgCollection from "./SvgCollection.vue";
import { isLogin } from "../store/loginStore.ts";

const today = new Date();
const currentTime = `${today.getHours()}:${today.getMinutes()}`;
const currentDate = today.toDateString();

</script>

<style scoped>
.styleTitle{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
</style>