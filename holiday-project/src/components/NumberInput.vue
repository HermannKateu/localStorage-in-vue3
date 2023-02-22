<template>
  <div class="flex flex-col gap-y-1 font-WorkSans text-base">
    <label for="number" class="text-gray-800"> Number of days </label>
    <input
      type="number"
      :class="['outline-none my-1 h-12 pl-4 text-black-400 border border-gray-200 bg-gray-100 rounded-md',
           errors.length > 0
            ? 'border-red-900 focus:shadow-red'
            : 'border-gray focus:border-gray focus:shadow-gray',]"
      placeholder="Ex.18"
      min="1"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      readonly
    />
    <div v-for="error in errors" v-if="errors.length" :key="error.$uid">
      <ErrorWrapper :message="error.$message" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {ErrorObject} from "@vuelidate/core";
import ErrorWrapper from "./ErrorWrapper.vue";

defineProps({
  modelValue: {
    type: String,
    require: true,
  },
  errors: {
    type: Array as PropType<ErrorObject[]>,
    default: () => [],
  }
});
</script>
