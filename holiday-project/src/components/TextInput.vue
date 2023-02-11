<template>
  <div class="flex flex-col gap-y-1">
    <label for="password" class="text-gray-300 text-lg font-WorkSans">
      {{ label }}
    </label>
      <input
          :class="[
          'w-full my-1 h-12 pl-2 text-black-400 text-base border border-gray outline-none focus:outline-none bg-gray-100 rounded-md ease-in-out duration-500 shadow-sm  hover:shadow-lg md:h-12',
          ]"
          type="text"
          :placeholder="placeholder"
          name="password"
          id="password"
          autocomplete="on"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          data-test="password-input"
      />
  </div>
</template>

<script setup lang="ts">

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
});
</script>

<style scoped>
input:focus {
  border: 2px solid rgb(95, 95, 95);
  caret-color: blue;
}
</style>
