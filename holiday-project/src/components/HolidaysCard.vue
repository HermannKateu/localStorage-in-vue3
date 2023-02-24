<template>
  <div
    class="bg-gray-400 p-5 border border-gray-200 rounded-lg font-WorkSans w-full flex flex-col gap-y-4 shadow-[#D1E4FA] shadow-lg"
  >
    <div class="flex flex-row justify-between text-gray text-sm font-medium">
      <span data-test="starting-date">
        Created {{ daysSinceCreation }} day(s) ago
      </span>
      <span data-test="time">
        {{ holiday.creationDate }}
      </span>
    </div>
    <div class="text-blue-100 font-bold text-xl" data-test="date">
      {{ `${dayjs(holiday.starting).format("MMMM, D")} - ${dayjs(holiday.ending).format("MMMM, D")}` }}
    </div>
    <span class="text-gray-700 text-sm leading-tight flex w-full break-all" data-test="description">
      {{ holiday.description }}
    </span>
    <button
      class="text-blue-100 text-sm font-semibold bg-gray-600 rounded-xl py-1 w-20"
      type="submit"
      data-test="state"
    >
      {{ holiday.type.key }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import {HolidayInfo} from "../utils/type";
import dayjs from "dayjs";
import {computed, ref} from "vue";

const days = ref<number>(1);
const props = defineProps({
  holiday: {
    type: Object as PropType<HolidayInfo>,
    default: () => ({}),
  },
});

const daysSinceCreation = computed<number>(() => props.holiday?.creationDate === `${dayjs().hour()}h${dayjs().minute()}` ? days.value++ : 1);
</script>
