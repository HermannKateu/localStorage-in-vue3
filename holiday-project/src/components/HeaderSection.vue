<template>
  <header
      ref="shouldClose"
    class="flex flex-col h-20 p-4 gap-y-4 bg-white md:br-gray-400 shadow-md shadow-gray-200 md:h-28"
  >
    <div class="flex justify-between p-2 font-WorkSans">
      <BreadCrumb @closeModal="shouldLogout = false" />
      <UserInitials
          v-if="$route.name !== 'login' && $route.name !== 'sign-up'"
          data-test="user-initials"
          @click="shouldLogout = !shouldLogout"
      />
      <transition>
        <section
            v-if="shouldLogout"
            class="w-11/12 divide-y divide-sky-300 md:w-[350px] rounded-lg border border-sky-300 p-4 bg-white absolute right-6 top-16"
        >
          <div
              data-test="user-details"
              class="cursor-pointer py-2 flex gap-x-2 items-center"
              @click="showUserDetails"> {{ t("header.details_lbl") }}
            <DetailsIcon />
          </div>
          <div
              data-test="user-update"
              class="cursor-pointer py-2 flex gap-x-2 items-center"
              @click="showUserUpdate"
          >
            {{ t("header.update_lbl") }}
            <Update class="w-[20px] h-[20px]" />
          </div>
          <div
              @click="logout"
              class="flex items-center gap-x-2 py-2 cursor-pointer"
          >
            {{ t("header.logout_lbl") }} <LogoutIcon />
          </div>
        </section>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import LogoutIcon from "../assets/Holidays-Icons/LogoutIcon.vue";
import { useRouter} from "vue-router";
import UserInitials from "./UserInitials.vue";
import Update from "../assets/Holidays-Icons/Update.vue";
import {useDetectOutsideClick} from "../utils/ousideDetector";
import DetailsIcon from "../assets/Holidays-Icons/DetailsIcon.vue";
import BreadCrumb from "./BreadCrumb.vue";
import {useI18n} from "vue-i18n";
import {User} from "../domain/user";
import {useUserStore} from "../store/user";

const shouldLogout = ref(false);
const router = useRouter();

const { t } = useI18n({
  useScope: "global",
  inheritLocale: true,
});

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

const shouldClose = ref<HTMLElement>();

useDetectOutsideClick(shouldClose, () => {
  shouldLogout.value = false;
});
</script>