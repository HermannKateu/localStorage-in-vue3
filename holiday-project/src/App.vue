<template>
  <div>
    <HeaderSection
        class="sticky top-0 z-50"
        @show-details="showUpdateModal"
        @show-update="showUpdateModal"
    />
    <section class="flex w-full">
      <router-view :class="['z-30 overscroll-x-none scroll', showShowDetails || showShowUpdate ? 'w-10/12' : 'w-full']"></router-view>
      <UserDetails v-if="showShowDetails" @close="showShowDetails = false"/>
      <UserUpdate v-show="showShowUpdate" @close="showShowUpdate = false"/>
    </section>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import HeaderSection from "../src/components/HeaderSection.vue";
import {useRoute} from "vue-router";
import UserDetails from "./components/UserDetails.vue";
import UserUpdate from "./components/UserUpdate.vue";

const showShowDetails = ref<boolean>(false);
const showShowUpdate = ref<boolean>(false);
const route = useRoute();

watch(() => route.name, (newRoot) => {
  if (newRoot) showShowDetails.value = false;
});

watch(() => route.name, (newRoot) => {
  if (newRoot) showShowUpdate.value = false;
});

const showUpdateModal = (value: string): void => {
  if (value === "update"){
    showShowUpdate.value = true;
    showShowDetails.value = false;
  }
  else if (value === "details"){
    showShowUpdate.value = false;
    showShowDetails.value = true;
  }
}
</script>

