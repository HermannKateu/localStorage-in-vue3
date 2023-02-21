<template>
  <header
    class="flex flex-col p-4 gap-y-4 bg-white md:br-gray-400 shadow-md shadow-gray-200 md:h-28"
  >
    <div class="flex justify-between p-2 font-WorkSans">
      <div class="flex items-center space-x-1">
        <ArrowLeftIcon
          @click="$router.back()"
          class="cursor-pointer hover:-translate-x-3 ease-in duration-500"
          v-if="$route.name !== 'login'"
        />
        <div :class="!isLogin && 'style-header'" data-test="contact">
          <img src="src/assets/holidays-foto/logo.png" class="w-10 h-10 md:w-20 md:h-20 rounded-full flex bottom-3" alt="logo-image"/>
          <span class="text-gray-700 text-sm md:text-lg" v-show="isLogin">
            {{ currentDate }}
          </span>
        </div>
      </div>
      <UserInitials
          v-if="$route.name !== 'login' && $route.name !== 'sign-up'"
          data-test="contact"
          @click="shouldLogout = !shouldLogout"
      />
      <transition>
        <section
            v-if="shouldLogout"
            class="w-11/12 divide-y divide-sky-300 md:w-[350px] rounded-lg border border-sky-300 p-4 bg-white absolute right-6 top-16"
        >
          <div class="cursor-pointer py-2">Display User Details</div>
          <div class="cursor-pointer py-2">Delete Account</div>
          <div
              @click="logout"
              class="flex items-center gap-x-2 py-2 cursor-pointer"
          >
            Logout <LogoutIcon />
          </div>
        </section>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { isLogin } from "../store/loginStore.ts";
import ArrowLeftIcon from "../assets/Holidays-Icons/ArrowLeftIcon.vue";
import { ref } from "vue";
import LogoutIcon from "../assets/Holidays-Icons/LogoutIcon.vue";
import { useRouter } from "vue-router";
import UserInitials from "./UserInitials.vue";

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
