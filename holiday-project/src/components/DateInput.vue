<template>
  <div class="flex flex-col gap-y-1 text-base font-WorkSans">
    <label for="date" class="text-gray-800">
      {{ labelValues }}
    </label>
    <div>
      <input
        type="date"
        :class="['outline-none my-1 h-12 px-3 border border-gray-200 bg-gray-100 rounded-md w-full',
                   errors.length > 0
            ? 'border-red-900 focus:shadow-red'
            : 'border-gray focus:border-gray focus:shadow-gray'
        ]"
        placeholder="Date"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :readonly="readonly"
      />
      <div v-for="error in errors" :key="error.$uid" >
        <ErrorWrapper :message="error.$message" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {ErrorObject} from "@vuelidate/core";
import ErrorWrapper from "./ErrorWrapper.vue";

defineProps({
  labelValues: {
    type: String,
    require: true,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    require: false,
  },
  errors: {
    type: Array as PropType<ErrorObject[]>,
    default: [],
  }
});
</script>
