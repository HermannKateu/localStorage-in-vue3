<template>
    <div class="bg-gray-100 h-screen px-4">
        <div class="flex flex-col items-center pt-24 mb-8 font-WorkSans">
            <h1 class="text-gray-800 font-bold text-3xl md:text-5xl" data-test="title">
                Hello, welcome to....
            </h1>
            <span class="text-gray-800 text-sm text-center block md:hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl eget consectetur
                 amet, quam. Amet mattis adipiscing in massa. At erat elementu
            </span>
            <span class="text-gray-800 text-sm text-center hidden md:block md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl eget consectetur amet, 
                quam. Amet mattis adipiscing in massa. At erat elementum pharetra cursus
                 laoreet risus. Placerat fames sit tristique ornare erat magna tellus.
            </span>
        </div>
        <div class="flex flex-col md:flex-row md:gap-x-8 md:mx-auto md:w-6/12">
            <div class="relative my-2 md:w-6/12">
                <router-link to="/create-holiday">
                    <MainButton label="Create new holiday" class="bg-blue-100 w-full rounded-md h-14 flex flex-row text-white"
                    data-test="create-holiday"/>
                    <span class="bottom-3 left-3 font-bold text-white text-2xl absolute bg-blue-200 w-7 h-7 rounded-md flex justify-center">+</span>
                </router-link>
            </div>
            <div class="relative my-2 md:w-6/12">
                <MainButton label="Liste des conges" class="bg-white-100 h-14 text-blue-100 rounded-md font-semibold flex flex-col justify-center text-base"
                @click="getRandomPage()" data-test="list-holiday"/>
                <BlueList class="w-6 h-7 absolute top-3 left-3" fill="blue"/>
            </div>
        </div>
        <div class="w-full mx-auto h-[179px] md:w-10/12 md:h-[600px]">
            <WelcomeImage class="w-full h-full mx-auto md:w-9/12" data-test="welcome-image"/>
        </div>
    </div>
</template>

<script setup>
import MainButton from "../components/MainButton.vue";
import BlueList from "../assets/Holidays-Icons/BlueList.vue";
import WelcomeImage from "../assets/holidays-foto/WelcomeImage.vue"
import { router } from "../router";

const getRandomPage = () => {
   return router.push("/holiday-list");
}

</script>

<style scoped>

</style>