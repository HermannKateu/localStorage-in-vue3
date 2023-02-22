<template>
  <div class="flex flex-col gap-y-1 font-WorkSans">
    <label for="description" class="text-gray-300 text-base">
      Description
    </label>
    <textarea
        @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Veuillez saisir votre description..."
      :class="['outline-none w-full text-lg border border-gray-200 h-28 px-3 pt-3 my-1 rounded-md placeholder:text-gray',
            errors.length > 0
            ? 'border-red-900 focus:shadow-red'
            : 'border-gray focus:border-gray focus:shadow-gray'
            ]"
    ></textarea>
    <div v-for="error in errors" v-if="errors?.length" :key="error.$uid">
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
