<template>
  <div
    class="bg-white px-4 bg-clip-border flex flex-col font-WorkSans py-20 gap-y-12 py-20 md:max-w-[768px]
     bg-cover	md:bg-white object-center	 md:mx-auto lg:max-w-[1649px]"
  >
    <div class="flex justify-between relative">
      <h1 class="text-gray-800 font-semibold text-3xl">{{ t("welcome.label_list") }}</h1>
      <router-link to="/create-holiday">
        <span
          class="text-gray-50 font-medium text-5xl block md:hidden absolute right-0 -top-2"
          data-test="holiday-form"
          >+</span
        >
      </router-link>
        <MainButton
            @click="$router.push('/create-holiday')"
            :label="t('welcome.label_create')"
            class="bg-blue-100 hidden h-14 text-lg w-60 text-white rounded-md py-4 md:block"
            data-test="holiday-form"
        />
    </div>
    <BlankWrapper v-if="holidays?.length === 0" />
    <div
      class="flex gap-y-5 flex-col md:flex-row md:flex-wrap md:gap-x-5 w-full"
      v-else
    >
        <HolidaysCard
            v-for="(holiday, index) in holidays"
            class="max-w-[385px] grow cursor-pointer hover:shadow-sm hover:transition hover:duration-300"
            data-test="holiday-card"
            :key="index"
            :holiday="holiday"
            @click="goTo(holiday.id)"
        />
    </div>
  </div>
</template>

<script setup lang="ts">
import HolidaysCard from "../components/HolidaysCard.vue";
import MainButton from "../components/MainButton.vue";
import {onBeforeMount, ref} from "vue";
import {useRouter} from "vue-router";
import BlankWrapper from "../components/BlankWrapper.vue";
import {useI18n} from "vue-i18n";
import  { Holiday } from "../domain/holiday";
import {useHolidayStore} from "../store/holiday";

const router = useRouter();
const holidays = ref<Array<Holiday>>([]);

const { t } = useI18n({
  useScope: "global",
  inheritLocale: true,
});


onBeforeMount(async () => {
  holidays.value = await useHolidayStore().getAllHolidays();
});

const goTo = async (id: number): Promise<void> => {
  await router.push(`/holidays/${id}`)
}
</script>