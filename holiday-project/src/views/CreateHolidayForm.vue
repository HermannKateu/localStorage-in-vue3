<template>
  <div class="bg-gray-100 h-screen flex md:bg-gray-200">
    <form
      class="px-4 pt-4 max-w-[900px] md:m-auto md:bg-white md:rounded-lg md:px-16"
    >
      <div class="font-WorkSans flex flex-col items-center md:pt-10 md:pb-4">
        <h1 class="text-gray-800 font-semibold text-3xl md:text-5xl">
          Create holiday
        </h1>
        <span class="text-gray text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur .
        </span>
      </div>
      <div class="flex flex-wrap gap-x-10 gap-y-3">
        <SelectOption placeholder="Choose your holiday Type" v-model="date.ending" label="Type" :options="holidayOptions" class="md:w-8/12"/>
        <div class="w-5/12 grow md:w-3/12">
          <DateInput
            labelValues="Starting date"
            v-model="date.starting"
            data-test="starting-date"
          />
        </div>
        <div class="w-5/12 grow md:w-3/12">
          <DateInput
            labelValues="Ending date"
            v-model="date.ending"
            data-test="ending-date"
          />
        </div>
        <div class="w-5/12 grow md:w-3/12">
          <NumberInput
            class="w-full"
            v-model="date.numberOfDays"
            data-test="numDays"
          />
        </div>
        <div class="w-5/12 grow md:w-3/12">
          <DateInput
            labelValues="Return date"
            v-model="date.return"
            data-test="return-date"
          />
        </div>
      </div>
      <DescriptionArea class="my-6 md:my-10" data-test="describe" />
      <MainButton
        label="SUBMIT"
        class="bg-blue-100 my-6 h-14 mx-auto text-white font-bold rounded-md flex text-lg md:text-xl md:my-14"
        data-test="submit-button"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import MainButton from "../components/MainButton.vue";
import DescriptionArea from "../components/DescriptionArea.vue";
import DateInput from "../components/DateInput.vue";
import NumberInput from "../components/NumberInput.vue";
import { reactive, computed } from "vue";
import SelectOption from "../components/SelectOption.vue";
import {holidayOptions} from "../utils/data";

const numberOfDays = computed<number>(() => {
  return 3
})

const date = reactive({
  starting: "",
  ending: "",
  numberOfDays: numberOfDays.value,
  return: "",
});
</script>
