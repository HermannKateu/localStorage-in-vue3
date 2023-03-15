<template>
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
      <ClipMain
          :label="routeCrumb[1].label"
          :is-current="routeCrumb[1].name === route.name"
          v-if="routeCrumb[1].name === route.name"
          @click="goTo(routeCrumb[1].path)"
          class="w-[80px] h-[35px] md:w-[130px] md:h-[45px] cursor-pointer"
      />
    </div>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import ClipPath from "./ClipPath.vue";
import ClipMain from "./ClipMain.vue";
import { routeCrumb } from "../utils/data";

const route = useRoute();
const defaultCrumb = {
  path: "/home",
  name: "home",
  label: "Home",
};
const router = useRouter();
const emit = defineEmits(["closeModal"])

const goTo = (id: string): void => {
  router.push(id);
}
</script>