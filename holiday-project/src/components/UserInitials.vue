<template>
  <div class="bg-blue-600 p-1 rounded-full w-10 h-10 cursor-pointer flex justify-center items-center text-white font-semibold">
      {{ withdrawInitialFromA(user.firstname)+ "" + withdrawInitialFromA(user.lastName) }}
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import {newNullUser, User} from "../domain/user";
import {useUserStore} from "../store/user";
import {withdrawInitialFromA} from "../utils/method";

const user = ref<User>(newNullUser())

onBeforeMount(async () => {
  user.value = await useUserStore().getUser();
});
</script>