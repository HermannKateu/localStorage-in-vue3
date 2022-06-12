<template>
    <div class="flex flex-col gap-y-1 text-base font-WorkSans">
        <label for="date" class="text-gray-800">
            {{ labelValues }}
        </label>
        <div>
            <input type="date" name="date" id="date" class="outline-none my-1 h-12 px-3 border border-gray-200 
            bg-gray-100 rounded-md w-full" placeholder="Date"
            :value="modelValue"  @input="$emit('update:modelValue', $event.target.value)" required>
        </div>
    </div>
</template>

<script setup>
import CalenderIcon from "../assets/Holidays-Icons/CalenderIcon.vue";

defineProps({
    labelValues: {
        type: String,
        require: true
    },
    modelValue: {
        type: String,
        require:  false
    } 
});
</script>


<style scoped>
input[type="date"]::before {
	color: #999999;
	content: attr(placeholder);
}
input[type="date"] {
	color: #eeeeee;
}
input[type="date"]:focus,
input[type="date"]:valid {
	color: #666666;
}
input[type="date"]:focus::before,
input[type="date"]:valid::before {
	content: "" !important;
}

</style>