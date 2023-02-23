<template>
  <ModalWrapper :show="shouldSHowDelete">
    Are you sure you want to delete this Holiday ?
    <div class="flex gap-x-4 my-2">
      <button class="bg-sky-200 font-semibold py-1.5 px-6 rounded" @click="shouldDelete = true">Delete</button>
      <button class="bg-sky-200 font-semibold py-1.5 px-6 rounded" @click="shouldSHowDelete = false">Cancel</button>
    </div>
  </ModalWrapper>
  <div class="px-4 py-16 font-WorkSans md:px-28 md:py-32">
    <div class="flex justify-between">
      <h1 class="text-gray-800 text-3xl font-semibold md:text-5xl">Details</h1>
      <BinIcon class="h-6 w-7 cursor-pointer" fill="gray" @click="shouldSHowDelete = true"/>
    </div>
    <h2
        class="text-gray-800 text-lg font-bold text-center my-6 md:text-2xl md:text-justify"
    >
      {{ `${dayjs(holidayDetails.starting).format("MMMM, D")} - ${dayjs(holidayDetails.ending).format("MMMM, D")}` }}
    </h2>
    <div
        class="flex flex-col gap-y-6 grow md:flex-row md:flex-wrap md:gap-y-20"
    >
      <div class="font-medium md:w-6/12">
        <span class="text-gray md:text-lg">Type</span>
        <h3 class="text-black text-base md:text-xl">
          {{ holidayDetails.type.key }}
        </h3>
      </div>
      <div class="font-medium grow flex flex-col gap-y-2 md:w-6/12">
        <span class="text-gray md:text-lg">Starts</span>
        <div class="flex justify-between md:w-6/12">
          <h3 class="text-black text-base md:text-xl">
            {{ dayjs(holidayDetails.starting).format("MMMM, D") }}
          </h3>
          <CalenderIcon class="h-6 w-7" fill="gray" />
        </div>
      </div>
      <div class="font-medium grow flex flex-col md:w-6/12">
        <span class="text-gray md:text-lg">Ends</span>
        <div class="flex justify-between md:w-6/12">
          <h3 class="text-black text-base md:text-xl">
            {{ dayjs(holidayDetails.ending).format("MMMM, D") }}
          </h3>
          <CalenderIcon class="h-6 w-7" fill="gray" />
        </div>
      </div>
      <div class="md:w-6/12 grow">
        <span class="text-gray md:text-lg">Description</span>
        <h3 class="text-black text-base md:text-xl">
          {{ holidayDetails.description }}
        </h3>
      </div>
      <div class="md:w-6/12">
        <span class="text-gray md:text-lg">Return</span>
        <h3 class="text-black text-base md:text-xl">{{ dayjs(holidayDetails.returnDate).format("dddd, D MMMM YYYY") }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import BinIcon from "../assets/Holidays-Icons/BinIcon.vue";
import CalenderIcon from "../assets/Holidays-Icons/CalenderIcon.vue";
import {onBeforeMount, ref, watch} from "vue";
import {HolidayInfo} from "../utils/type";
import dayjs from "dayjs";
import {holidays} from "../store/loginStore";
import ModalWrapper from "../components/ModalWrapper.vue";

const route = useRoute();
const router = useRouter();

const shouldSHowDelete = ref<boolean>(false);
const shouldDelete = ref<boolean>(false);
const  holidayDetails = ref<HolidayInfo>({} as HolidayInfo);
const allHolidays = ref<HolidayInfo[]>([]);

onBeforeMount(() => {
  allHolidays.value = holidays.value;
  holidayDetails.value = allHolidays.value[Number(route.params.id as string)];
});

watch(() => shouldDelete.value, async (newValue) => {
  if (newValue){
    allHolidays.value.splice(Number(route.params.id), 1);
    localStorage.setItem("allHolidays", JSON.stringify(allHolidays.value));
    shouldSHowDelete.value = false;
    await router.push("/holiday-list");
  }
  shouldDelete.value = false;
})
</script>
