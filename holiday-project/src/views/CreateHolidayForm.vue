<template>
    <div class="bg-gray-100 h-screen flex md:bg-gray-900">
        <form class="px-4 pt-4 max-w-[900px] md:m-auto md:bg-white md:rounded-lg md:px-16">
            <div class="font-WorkSans flex flex-col items-center md:pt-10 md:pb-4">
                <h1 class="text-gray-800 font-semibold text-3xl md:text-5xl">
                    Create holiday
                </h1>
                <span class="text-gray text-base md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur .
                </span>
            </div>
            <div class="flex flex-wrap gap-x-10 gap-y-3">
                <SelectHoliday class="md:w-8/12"/>
                <div class="w-5/12 grow md:w-3/12">
                   <DateInput labelValues="Starting date" v-model="date.starting"/>
                </div>
                <div class="w-5/12 grow md:w-3/12">
                    <DateInput labelValues="Ending date" v-model="date.ending"/>
                </div>
                <div class="w-5/12 grow md:w-3/12">
                    <NumberInput  class="w-full" v-model="date.numberOfDays"/>
                </div>
                <div class="w-5/12 grow md:w-3/12">
                   <DateInput labelValues="Return date" v-model="date.return"/>
                </div>
            </div>
            <DescriptionArea class="my-6 md:my-10"/>
            <MainButton label="SUBMIT" class="bg-blue-100 my-6 h-14 mx-auto text-white font-bold rounded-md flex text-lg md:text-xl md:my-14"/>
        </form>
    </div>
</template>

<script setup>
import MainButton from "../components/MainButton.vue";
import DescriptionArea from "../components/DescriptionArea.vue";
import SelectHoliday from "../components/SelectHoliday.vue";
import DateInput from "../components/DateInput.vue";
import NumberInput from "../components/NumberInput.vue";
import { reactive, watch} from "vue";

const date = reactive({
    starting: "",
    ending: "",
    numberOfDays: null,
    return: ""
});

// watch([date.starting,date.ending], (newDates,oldDates) => {
//     if(oldDates[0] === "" || oldDates[1] === ""){
//         date.numberOfDays = 0;
//     } 
//     else{
//         console.log(typeof oldDates[0]);
        
//         date.numberOfDays = Math.ceil(Math.abs(new Date(newDates[1]) - new Date(oldDates[0])) / (1000 * 60 * 60 * 24));
//     }
// });
</script>

<style scoped>

</style>