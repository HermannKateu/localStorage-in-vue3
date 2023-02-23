<template>
  <header
    class="flex flex-col p-4 gap-y-4 bg-white md:br-gray-400 shadow-md shadow-gray-200 md:h-28"
  >
    <div class="flex justify-between p-2 font-WorkSans">
      <div class="flex items-center space-x-1">
        <ArrowLeftIcon
          @click="goBack"
          class="cursor-pointer hover:-translate-x-3 ease-in duration-500"
          v-if="$route.name !== 'login'"
        />
        <div :class="!isLogin && 'style-header'" data-test="contact">
          <Logo class="h-10 w-10 md:w-12 md:h-12"/>
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
          <div class="cursor-pointer py-2" @click="showUserDetails">Display User Details</div>
          <div class="cursor-pointer py-2">Update User</div>
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
import { isLogin } from "../store/loginStore";
import ArrowLeftIcon from "../assets/Holidays-Icons/ArrowLeftIcon.vue";
import { ref } from "vue";
import LogoutIcon from "../assets/Holidays-Icons/LogoutIcon.vue";
import { useRouter } from "vue-router";
import UserInitials from "./UserInitials.vue";
import Logo from "../assets/holidays-foto/logo.vue";

const shouldLogout = ref(false);
const router = useRouter();
const emit = defineEmits(["showDetails"]);
const goBack = async (): Promise<void> => {
  await router.back();
  shouldLogout.value = false;
}

const logout = async (): Promise<void> => {
  shouldLogout.value = false;
  await router.push("/");
};

const showUserDetails = async (): Promise<void> => {
  shouldLogout.value = false;
  emit("showDetails");
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
