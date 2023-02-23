<template>
  <section class="shadow-md shadow-sky-200 font-bold border bg-opacity-70 bg-black w-full z-40 h-screen md:h-[90vw] md:fixed absolute">
    <section class="w-full md:w-[330px] fixed h-full right-0  flex flex-col pt-3 px-6 gap-y-4 bg-white">
      <span class="flex border-b border-sky-300 pb-3 divide-x-2 divide-sky-300">
        <span class="font-bold flex flex-col">
          <Person class="mr-4"/>
           {{currentUser.sex}}
        </span> <span class="font-bold flex text-3xl items-center pl-4">{{currentUser.firstname+ " " +currentUser.lastname}}</span>
    </span>
      <span class="text-sky-300 text-4xl">
        INITIALS: {{currentUser.firstname?.charAt(0).toUpperCase()+ "" +currentUser.lastname?.charAt(0).toUpperCase()}}
      </span>
      <div class="flex gap-x-3 items-center cursor-pointer text-sky-300 absolute bottom-[200px]" @click="$emit('close')">
        Close:  <ArrowRight class="hover:translate-x-4 duration-500"/>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import {currentUser} from "../store/loginStore";
import Person from "../assets/holidays-foto/Person.vue";
import ArrowRight from "../assets/holidays-foto/ArrowRight.vue";

defineEmits(["close"]);
</script>

<style scoped>
div {
  animation-iteration-count: infinite;
}
</style>