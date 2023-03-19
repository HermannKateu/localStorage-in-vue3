<template>
  <section class="md:h-[90vw] md:fixed">
    <ModalWrapper :show="shouldShowDelete">
      Are you sure you want to delete this Holiday ?
      <div class="flex gap-x-4 my-2">
        <button class="bg-sky-200 font-semibold py-1.5 px-6 rounded text-red-900" @click="shouldDelete = true">Delete</button>
        <button class="bg-sky-200 font-semibold py-1.5 px-6 rounded text-gray" @click="shouldShowDelete = false">Cancel</button>
      </div>
    </ModalWrapper>
    <div class="px-4 py-16 font-WorkSans md:px-28 md:py-32">
      <div class="flex justify-between">
        <h1 class="text-gray-800 text-3xl font-semibold md:text-5xl">Details</h1>
        <BinIcon class="h-6 w-7 cursor-pointer" fill="gray" @click="shouldShowDelete = true"/>
      </div>
      <h2
          class="text-gray-800 text-lg font-bold text-center my-6 md:text-2xl md:text-justify"
      >
        {{ `${dayjs(holiday.startingDate).format("MMMM, D")} - ${dayjs(holiday.endingDate).format("MMMM, D")}` }}
      </h2>
      <div
          class="flex flex-col gap-y-6 grow md:flex-row md:flex-wrap md:gap-y-20"
      >
        <div class="font-medium md:w-6/12">
          <span class="text-gray md:text-lg">Type</span>
          <h3 class="text-black text-base md:text-xl">
            {{ holiday.type }}
          </h3>
        </div>
        <div class="font-medium grow flex flex-col gap-y-2 md:w-6/12">
          <span class="text-gray md:text-lg">Starts</span>
          <div class="flex justify-between md:w-6/12">
            <h3 class="text-black text-base md:text-xl">
              {{ dayjs(holiday.startingDate).format("MMMM, D") }}
            </h3>
            <CalenderIcon class="h-6 w-7" fill="gray" />
          </div>
        </div>
        <div class="font-medium grow flex flex-col md:w-6/12">
          <span class="text-gray md:text-lg">Ends</span>
          <div class="flex justify-between md:w-6/12">
            <h3 class="text-black text-base md:text-xl">
              {{ dayjs(holiday.endingDate).format("MMMM, D") }}
            </h3>
            <CalenderIcon class="h-6 w-7" fill="gray" />
          </div>
        </div>
        <div class="md:w-6/12 grow">
          <span class="text-gray md:text-lg">Description</span>
          <h3 class="text-black text-base md:text-xl">
            {{ holiday.description }}
          </h3>
        </div>
        <div class="md:w-6/12">
          <span class="text-gray md:text-lg">Return</span>
          <h3 class="text-black text-base md:text-xl">{{ dayjs(holiday.returnDate).format("dddd, D MMMM YYYY") }}</h3>
        </div>
        <div class="md:w-6/12">
          <span class="text-gray md:text-lg">Number Of Days</span>
          <h3 class="text-black text-base md:text-xl">{{ holiday.numberOfDays }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import BinIcon from "../assets/Holidays-Icons/BinIcon.vue";
import CalenderIcon from "../assets/Holidays-Icons/CalenderIcon.vue";
import {onBeforeMount, ref, watch} from "vue";
import dayjs from "dayjs";
import ModalWrapper from "../components/ModalWrapper.vue";
import type{ Holiday } from "../domain/holiday";
import { useHolidayStore } from "../store/holiday";

const route = useRoute();
const router = useRouter();

const shouldShowDelete = ref<boolean>(false);
const shouldDelete = ref<boolean>(false);
const  holiday = ref<Holiday>({} as Holiday);

onBeforeMount(async () => {
  holiday.value = await useHolidayStore().getHolidayById(Number(route.params.id));
});

watch(() => shouldDelete.value, async (newValue) => {
  if (newValue){
    await useHolidayStore().deleteHoliday(holiday.value.id)
    shouldShowDelete.value = false;
    await router.push("/holiday-list");
  }
  shouldDelete.value = false;
})
</script>
