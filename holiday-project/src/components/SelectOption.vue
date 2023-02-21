<template>
  <section class="relative" ref="dropDown">
    <section class="text-black text-base flex gap-0.5 items-center mb-2">
      <label class="text-black text-base" :data-test="`label-${label}`">
        {{ label }}
      </label>
      <slot name="rightSide" />
    </section>
    <div class="relative w-full" :data-test="`${label}-dropdown`">
      <input
          :data-test="`input-${label}`"
          :class="[
          'placeholder:capitalize placeholder:text-gray-100 outline-none cursor-pointer border bg-white rounded pl-4 py-1.5 w-full h-12 pr-10 placeholder:text-gray-200',
          {
            'border-gray shadow-blue focus:border-blue-500 focus:shadow-blue':
              errors.length === 0 && shouldDisplayOptions,
            'border-red-900 shadow-red focus:border-red-900 focus:shadow-red':
              errors.length > 0 && shouldDisplayOptions,
            'border-red-900': errors.length > 0,
          },
        ]"
          type="text"
          :placeholder="placeholder"
          :value="selectDisplay"
          @input="startResearch"
          @keyup="shouldDisplayOptions = true"
          @focus="toggleDisplayOptions"
          autocomplete="off"
      />
    </div>
    <section
        data-test="options"
        class="w-full inset-x-0 z-50 absolute p-4 rounded-md border border-gray-100 shadow-[0px_4px_16px_4px_rgba(0,0,0,0.07)] bg-white mt-2 mb-8 space-y-2"
        v-if="shouldDisplayOptions"
    >
      <div
          :data-test="`option-${option.value}`"
          v-for="(option, index) in filteredOptions"
          :tabindex="index"
          :key="index"
          @click="selectIndex(option)"
          :class="[
          'w-full p-2 font-outfit text-black font-medium cursor-pointer',
          selectDisplay === option.value
            ? 'text-blue-100 bg-sky-300 rounded-md shadow'
            : 'hover:bg-sky-100 hover:rounded-md hover:shadow',
        ]"
      >
        {{ option.value }}
      </div>
      <div class="text-center py-2" v-if="filteredOptions.length === 0">
         Nothing Found
      </div>
    </section>
    <div
        class="flex gap-x-2 my-2 items-center"
        v-if="errors.length && shouldDisplayErrorMessage"
    >
      <ErrorWrapper
          v-for="error in errors"
          :key="error.$uid"
          :data-test="`${label}-error`"
          :message="error.$message"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from "vue";
import { ErrorObject } from "@vuelidate/core";
import ErrorWrapper from "./ErrorWrapper.vue";
import {useDetectOutsideClick} from "../utils/ousideDetector";

type KeyWord = {
  value: string;
  key: string;
}
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  options: {
    type: Array as PropType<Array<KeyWord>>,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Object as PropType<unknown>,
    required: true,
  },
  errors: {
    type: Object as PropType<ErrorObject[]>,
    default: [] as ErrorObject[],
  },
  placeholder: {
    type: String,
    required: true,
  },
  shouldDisplayErrorMessage: {
    type: Boolean,
    default: true,
  },
});

const shouldDisplayOptions = ref(false);
const selected = ref<string>("");
const selectDisplay = ref<string>("");

const selectIndex = (option: KeyWord): void => {
  selected.value = "";
  selectDisplay.value = option.value;
  emit("update:modelValue", option);
  shouldDisplayOptions.value = false;
};

const filteredOptions = computed(() => {
  if (selected.value) {
    return props.options.filter((option) =>
        option.value
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(selected.value.toLowerCase().replace(/\s+/g, ""))
    );
  }
  return props.options;
});

const startResearch = ($event: { target: { value: string } }): void => {
  selected.value = selectDisplay.value = $event.target.value;
};

const toggleDisplayOptions = (): void => {
  shouldDisplayOptions.value = !shouldDisplayOptions.value;
};

const dropDown = ref<HTMLElement>();

useDetectOutsideClick(dropDown, () => {
  shouldDisplayOptions.value = false;
});
</script>
