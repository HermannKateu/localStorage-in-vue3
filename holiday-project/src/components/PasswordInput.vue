<template>
    <div class="flex flex-col gap-y-1">
        <label for="password" class="text-gray-300 text-lg font-WorkSans">
          Password
        </label>
        <div class="relative">
            <input class="outline-none w-full  my-1 h-14 pl-12 text-black-400 text-base border border-gray 
             bg-gray-100 rounded-md text-lg ease-in-out duration-500 shadow-sm shadow-gray-200 
             hover:shadow-gray-600 hover:shadow-lg md:h-16"
               type="password" placeholder="Enter your password" name="password" id="password" autocomplete="on" 
               :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" data-test="password-input" required>
            <LockIcon class="w-12 h-5 absolute top-5 left-0 md:top-6" fill="gray"/>
        </div>
    </div>
</template>

<script setup>
import LockIcon from "../assets/Holidays-Icons/LockIcon.vue";

defineProps({
    labelValues: {
        type: String,
        require: true
    },
    modelValue: {
        type: String,
        require: false
    }
});
</script>

<style scoped>
input:focus{
    border: 2px solid rgb(95, 95, 95);
    caret-color: blue;
}
</style>