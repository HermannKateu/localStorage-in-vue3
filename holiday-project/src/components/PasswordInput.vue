<template>
  <div class="flex flex-col gap-y-1">
    <label for="password" class="text-gray-300 text-lg font-WorkSans">
      {{ label }}
    </label>
    <div class="relative">
      <input
        :class="[
          'w-full my-1 h-14 pl-12 text-black-400 text-base border outline-none bg-gray-100 rounded-md ease-in-out duration-500 shadow-sm shadow-gray-200 hover:shadow-gray-600 hover:shadow-md md:h-16',
            errors.length > 0
            ? 'border-red-900 focus:shadow-red'
            : 'border-gray focus:border-gray focus:shadow-gray',
        ]"
        :type="passwordType"
        placeholder="Enter your password"
        autocomplete="on"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        data-test="password-input"
      />
      <LockIcon
        class="w-12 h-5 absolute top-5 left-0 md:top-6 cursor-pointer"
        fill="gray"
        @click="type = !type"
      />
      <div v-for="error in errors" v-if="errors.length" :key="error.$uid">
        <ErrorWrapper :message="error.$message" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LockIcon from "../assets/Holidays-Icons/LockIcon.vue";
import { ref } from "@vue/runtime-core";
import {PropType, watch} from "vue";
import {ErrorObject} from "@vuelidate/core";
import ErrorWrapper from "./ErrorWrapper.vue";

defineProps({
  modelValue: {
    type: String,
    require: false,
  },
  label: {
    type: String,
    require: false,
  },
  errors: {
    type: Array as PropType<ErrorObject[]>,
    default: () => [],
  }
});
const passwordType = ref("password");
const type = ref<boolean>(true);

watch(
  () => type.value,
  (value) => {
    return value
      ? (passwordType.value = "password")
      : (passwordType.value = "text");
  }
);
</script>

<style scoped>
input:focus {
  caret-color: blue;
}
</style>
