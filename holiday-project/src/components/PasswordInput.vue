<template>
  <div class="flex flex-col gap-y-1">
    <label for="password" class="text-gray-300 text-lg font-WorkSans text-black">
      {{ label }}
    </label>
    <div class="relative">
      <input
        :class="[
          'w-full my-1 h-10 pl-12 text-black-400 text-base border outline-none bg-gray-100 rounded-md ease-in-out duration-500 shadow-sm shadow-gray-200 hover:shadow-gray-600 hover:shadow-md md:h-12',
            errors.length > 0
            ? 'border-red-900 focus:shadow-red'
            : 'border-gray focus:border-gray focus:shadow-gray',
        ]"
        :type="passwordType"
        placeholder="Enter your password"
        autocomplete="on"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span
          class="absolute top-4 left-1 md:top-5 cursor-pointer flex w-fit"
          @click="type = !type"
      >
        <LockIcon
            class="w-12 h-4"
            fill="gray"
            v-if="type"
        />
        <Unlock
            v-else
            class="w-12 h-4"
            fill="gray"
        />
      </span>
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
import Unlock from "../assets/icons/Unlock.vue";

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
