<template>
  <div
    class="bg-gray-400 p-5 border border-gray-200 rounded-lg font-WorkSans w-full flex flex-col gap-y-4 shadow-[#D1E4FA] shadow-lg"
  >
    <div class="flex flex-row justify-between text-gray text-sm font-medium">
      <span v-if="!creationDays">
        Created now
      </span>
      <span data-test="starting-date" v-else>
        {{ `created ${creationDays} days ago` }}
      </span>
      <span data-test="time">
        {{ dayjs(holiday.creationDate).format("h:mm A") }}
      </span>
    </div>
    <div class="text-blue-100 font-bold text-xl" data-test="date">
      {{ `${dayjs(holiday.startingDate).format("MMMM, D")} - ${dayjs(holiday.endingDate).format("MMMM, D")}` }}
    </div>
    <span class="text-gray-700 text-sm leading-tight flex w-full break-all" data-test="description">
      {{ holiday.description }}
    </span>
    <button
      class="text-blue-100 text-sm font-semibold bg-gray-600 rounded-xl py-1 w-20"
      type="submit"
      data-test="type"
    >
      {{ holiday.type }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from "vue";
import dayjs from "dayjs";
import type { Holiday } from "../domain/holiday";

const props = defineProps({
  holiday: {
    type: Object as PropType<Holiday>,
    required: true,
  },
});

const counter = ref<number>(0);

const creationDays = computed(() => {
  if(dayjs(props.holiday.creationDate).format("h:mm A") === dayjs().format("h:mm A")){
    return counter.value++;
  }
  return counter.value;
})
</script>
