<template>
    <div class="flex flex-col gap-y-1 font-WorkSans text-base">
        <label for="number" class="text-gray-800">
            Number of days
        </label>
        <input type="number" class="outline-none my-1 h-12 pl-4 text-black-400 border border-gray-200 bg-gray-100 
            rounded-md" min="1" placeholder="18"  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" readonly>
    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: String,
        require: true
    }
});

</script>

<style scoped></style>