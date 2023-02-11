<template>
  <header
    class="flex flex-col p-4 gap-y-4 bg-white md:br-gray-400 shadow-lg shadow-gray-200 md:h-32"
  >
    <div class="flex justify-between p-2 font-WorkSans">
      <div class="flex items-center space-x-5">
        <ArrowLeftIcon
          @click="$router.back()"
          class="cursor-pointer hover:-translate-x-3 ease-in duration-500"
          v-if="$route.name !== 'login'"
        />
        <div :class="!isLogin && 'style-header'" data-test="contact">
          <h1
            class="text-gray-300 font-bold text-4xl leading-tight md:flex md:items-center md:text-5xl"
          >
            Logo
          </h1>
          <span class="text-gray-700 text-sm md:text-lg" v-show="isLogin">
            {{ currentDate }}
          </span>
        </div>
      </div>
      <ContactIcon
        class="w-10 h-9 cursor-pointer"
        fill="gray"
        v-if="$route.name !== 'login' && $route.name !== 'sign-up'"
        data-test="contact"
        @click="shouldLogout = !shouldLogout"
      />
      <section
        v-if="shouldLogout"
        class="w-11/12 divide-y divide-sky-300 md:w-[350px] rounded-lg border border-sky-300 p-4 bg-white absolute right-6 top-16"
      >
        <div class="cursor-pointer py-2">Display User Details</div>
        <div class="cursor-pointer py-2">Others</div>
        <div
          @click="logout"
          class="flex items-center gap-x-2 py-2 cursor-pointer"
        >
          Logout <LogoutIcon />
        </div>
      </section>
    </div>
  </header>
</template>

<script setup lang="ts">
import ContactIcon from "../assets/Holidays-Icons/ContactIcon.vue";
import { isLogin, currentUser } from "../store/loginStore.ts";
import ArrowLeftIcon from "../assets/Holidays-Icons/ArrowLeftIcon.vue";
import { ref } from "vue";
import LogoutIcon from "../assets/Holidays-Icons/LogoutIcon.vue";
import { useRouter } from "vue-router";

const today = new Date();
const currentDate = today.toDateString();
const shouldLogout = ref(false);
const router = useRouter();

const logout = async (): Promise<void> => {
  shouldLogout.value = false;
  await router.push("/");
};
</script>

<style scoped>
.style-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
</style>
