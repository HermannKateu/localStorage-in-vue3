<template>
  <header
      ref="shouldClose"
    class="flex flex-col h-20 p-4 gap-y-4 bg-white md:br-gray-400 shadow-md shadow-gray-200 md:h-28"
  >
    <div class="flex justify-between p-2 font-WorkSans">
      <div class="flex -space-x-3.5 md:-space-x-6" v-if="route.name !== 'login' && route.name !== 'sign-up'">
        <ClipPath class="w-[80px] h-[35px] md:w-[130px] md:h-[45px] cursor-pointer"
                  :is-current="route.name === defaultCrumb.name"
                  @click="goTo(defaultCrumb.path)"
        />
          <ClipMain :label="routeCrumb[0].label"
                    :is-current="routeCrumb[0].name === route.name"
                    v-if="routeCrumb[0].name === route.name"
                    @click="goTo(routeCrumb[0].path)"
                    class="w-[80px] h-[35px] md:w-[130px] md:h-[45px] cursor-pointer"
          />
          <ClipMain :label="routeCrumb[1].label"
                    :is-current="routeCrumb[1].name === route.name"
                    v-if="routeCrumb[1].name === route.name"
                    @click="goTo(routeCrumb[1].path)"
                    class="w-[80px] h-[35px] md:w-[130px] md:h-[45px] cursor-pointer"
          />
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
          <div class="cursor-pointer py-2 flex gap-x-2 items-center" @click="showUserDetails">Display User Details <DetailsIcon /></div>
          <div class="cursor-pointer py-2 flex gap-x-2 items-center" @click="showUserUpdate">Update User
            <Update class="w-[20px] h-[20px]" />
          </div>
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
import {ref} from "vue";
import LogoutIcon from "../assets/Holidays-Icons/LogoutIcon.vue";
import {useRoute, useRouter} from "vue-router";
import UserInitials from "./UserInitials.vue";
import ClipPath from "./ClipPath.vue";
import ClipMain from "./ClipMain.vue";
import {routeCrumb} from "../utils/data";
import Update from "../assets/Holidays-Icons/Update.vue";
import {useDetectOutsideClick} from "../utils/ousideDetector";
import DetailsIcon from "../assets/Holidays-Icons/DetailsIcon.vue";

const defaultCrumb = {
      path: "/home",
      name: "home",
      label: "Home",
    };
const shouldLogout = ref(false);
const router = useRouter();
const route = useRoute();

const emit = defineEmits(["showDetails", "showUpdate"]);
const logout = async (): Promise<void> => {
  shouldLogout.value = false;
  await router.push("/");
};

const showUserDetails = async (): Promise<void> => {
  shouldLogout.value = false;
  emit("showDetails", "details");
};

const showUserUpdate = async (): Promise<void> => {
  shouldLogout.value = false;
  emit("showUpdate", "update");
};

const goTo = (id: string): void => {
  router.push(id);
  shouldLogout.value = false;
}

const shouldClose = ref<HTMLElement>();

useDetectOutsideClick(shouldClose, () => {
  shouldLogout.value = false;
});
</script>

<style scoped>
.style-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
</style>
