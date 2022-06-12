<template>
    <div class="bg-gray-400 p-5 border border-gray-200 rounded-lg font-WorkSans w-full flex flex-col gap-y-4 shadow-[#D1E4FA] shadow-lg">    
        <div class="flex flex-row justify-between text-gray text-sm font-medium">
            <span>
                {{ holiday.starting }}
            </span>
            <span>
                {{ holiday.time }}
            </span>
        </div>
        <div class="text-blue-100 font-bold text-xl">
            {{ holiday.date }}
        </div>
        <span class="text-gray-700 text-sm">
            {{ holiday.description }}
        </span>
        <button class="text-blue-100 text-sm font-semibold bg-gray-600 rounded-xl py-1 w-20" type="submit">
            {{ holiday.state }}
        </button>
    </div>
</template>


<script setup lang="ts">
import type { PropType } from "vue";
import { Holiday } from "../types";

defineProps({
    holiday: {
        type: Object as PropType<Holiday>
    }
})
</script>

<style scoped>

</style>