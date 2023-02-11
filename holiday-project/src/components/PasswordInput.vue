<template>
  <div class="flex flex-col gap-y-1">
    <label for="password" class="text-gray-300 text-lg font-WorkSans">
      Password
    </label>
    <div class="relative">
      <input
        :class="[
          'w-full my-1 h-14 pl-12 text-black-400 text-base border border-gray outline-none focus:outline-none bg-gray-100 rounded-md ease-in-out duration-500 shadow-sm  hover:shadow-lg md:h-16',
        ]"
        :type="passwordType"
        placeholder="Enter your password"
        name="password"
        id="password"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import LockIcon from "../assets/Holidays-Icons/LockIcon.vue";
import { ref } from "@vue/runtime-core";
import { watch } from "vue";

defineProps({
  modelValue: {
    type: String,
    require: false,
  },
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
  border: 2px solid rgb(95, 95, 95);
  caret-color: blue;
}
</style>
