<template>
  <div
    class="bg-white px-4 flex flex-col font-WorkSans py-20 gap-y-12 py-20 md:max-w-[768px] md:bg-white md:mx-auto lg:max-w-[1649px]"
  >
    <div class="flex justify-between relative">
      <h1 class="text-gray-800 font-semibold text-3xl">Holidays</h1>
      <router-link to="/create-holiday">
        <span
          class="text-gray-50 font-medium text-5xl block md:hidden absolute right-0 -top-2"
          data-test="holiday-form"
          >+</span
        >
      </router-link>
      <router-link to="/create-holiday">
        <MainButton
          label="Create holiday"
          class="bg-blue-100 hidden h-14 text-lg w-60 text-white rounded-md py-4 md:block"
          data-test="holiday-form"
        />
      </router-link>
    </div>
    <BlankWrapper v-if="allHolidays?.length === 0" />
    <div
      class="flex gap-y-5 flex-col md:flex-row md:flex-wrap md:gap-x-10 md:w-full md:mx-auto w-full"
      v-else
    >
        <HolidaysCard
            v-for="(holiday, index) in allHolidays"
            :holiday="holiday"
            class="max-w-[350px] grow cursor-pointer"
            data-test="holiday-card"
            :key="index"
            @click="goTo(index)"
        />
    </div>
  </div>
</template>

<script setup lang="ts">
import HolidaysCard from "../components/HolidaysCard.vue";
import MainButton from "../components/MainButton.vue";
import {computed, onBeforeMount, ref} from "vue";
import type {HolidayInfo} from "../utils/type";
import {useRouter} from "vue-router";
import BlankWrapper from "../components/BlankWrapper.vue";

const router = useRouter();
const allHolidays = ref<HolidayInfo[]>([])
onBeforeMount(() => {
  allHolidays.value = JSON.parse(localStorage.getItem("allHolidays") as string);
})

const holidays = computed<HolidayInfo[]>(() => allHolidays.value);
const goTo = async (id: number): Promise<void> => {
  await router.push(`/holiday-item/${id}`)
}
</script>