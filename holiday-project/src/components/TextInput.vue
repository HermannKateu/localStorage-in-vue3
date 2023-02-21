<template>
  <div class="flex flex-col gap-y-1">
    <label class="text-gray-300 text-lg font-WorkSans">
      {{ label }}
    </label>
    <div class="relative">
      <input
          :class="[
          'outline-none w-full h-14 pl-12 text-black-400 text-base border md:h-16 bg-gray-100 rounded-md ease-in-out duration-500 shadow-sm shadow-gray-200 hover:shadow-gray-600 hover:shadow-md',
          errors.length > 0
            ? 'border-red-900 focus:shadow-red'
            : 'border-gray focus:border-gray focus:shadow-gray',
          ]"
          type="text"
          :placeholder="placeholder"
          autocomplete="on"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          data-test="password-input"
      />
      <WrapperIcon
          class="w-11 h-4 absolute top-5 left-0 md:top-6"
          fill="gray"
      />
    </div>
      <div v-for="error in errors" v-if="errors.length" :key="error.$uid">
        <ErrorWrapper :message="error.$message" />
      </div>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {ErrorObject} from "@vuelidate/core";
import ErrorWrapper from "./ErrorWrapper.vue";
import WrapperIcon from "../assets/Holidays-Icons/WrapperIcon.vue";

defineProps({
  modelValue: {
    type: String,
    require: true,
  },
  label: {
    type: String,
    require: true,
  },
  placeholder: {
    type: String,
    require: true,
  },
  errors: {
    type: Array as PropType<ErrorObject[]>,
    default: () => [],
  }
});
</script>

<style scoped>
input:focus {
  caret-color: blue;
}
</style>
