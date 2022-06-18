<template>
    <div class="flex flex-col gap-y-1">
        <label for="password" class="text-gray-300 text-lg font-WorkSans">
           Email
        </label>
        <div class="relative">
            <input type="email" name="email" id="email" class="outline-none w-full h-14  pl-12 text-black-400 text-base border border-gray md:h-16
               bg-gray-100 rounded-md ease-in-out duration-500 shadow-sm shadow-gray-200 hover:shadow-gray-600 hover:shadow-lg" 
               :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
                placeholder="Enter your email..." data-test="email-input" required>
            <WrapperIcon class="w-11 h-4 absolute top-5 left-0 md:top-6" fill="gray"/>
        </div>
    </div>
</template>

<script setup>
import WrapperIcon from "../assets/Holidays-Icons/WrapperIcon.vue";

defineProps({
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