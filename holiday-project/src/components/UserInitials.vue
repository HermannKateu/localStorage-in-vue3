<template>
  <div class="bg-blue-600 p-1 rounded-full w-10 h-10 cursor-pointer flex justify-center items-center text-white font-semibold">
      {{ currentUser.firstname?.charAt(0).toUpperCase()+ "" + currentUser.lastname?.charAt(0).toUpperCase()}}
  </div>
</template>

<script setup lang="ts">
import { currentUser } from "../store/loginStore";

window.addEventListener("load", () => {
  currentUser.value = JSON.parse(localStorage.getItem("user") as string);
});
</script>