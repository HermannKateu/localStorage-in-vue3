<template>
  <div class="bg-gray-100 h-screen md:h-[90vw] md:fixed flex md:bg-gray-100" v-if="show">
    <form
      class="px-4 pt-4 max-w-[900px] md:mx-auto md:bg-white md:rounded-lg md:px-16 relative"
    >
      <span
          class="flex p-2.5 h-3 w-3 rounded-full border-2 border-gray justify-center items-center font-bold text-gray absolute right-4 cursor-pointer"
          @click="$emit('closeModal')"
      >x</span>
      <div class="font-WorkSans flex flex-col items-center md:pt-2 md:pb-4">
        <h1 class="text-gray-800 font-semibold text-3xl md:text-5xl">
          Create holiday
        </h1>
        <span class="text-gray text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur .
        </span>
      </div>
      <div class="flex flex-wrap gap-x-10 gap-y-3">
        <SelectOption
            placeholder="Choose your holiday Type"
            v-model="holidayInfo.type"
            label="Type"
            :options="holidayOptions"
            :errors="v$.type.$errors"
            class="w-full md:w-8/12"
        />
        <DateInput
            class="w-5/12 grow md:w-3/12"
            labelValues="Starting date"
            v-model="holidayInfo.starting"
            :errors="v$.starting.$errors"
            data-test="starting-date"
        />
        <DateInput
            class="w-5/12 grow md:w-3/12"
            labelValues="Ending date"
            v-model="holidayInfo.ending"
            :errors="v$.ending.$errors"
            data-test="ending-date"
        />
        <span class="text-red-900 font-normal font-outfit text-sm" v-if="hasError">The Ending Date most always be greater</span>
        <NumberInput
            class="w-5/12 grow md:w-3/12"
            v-model="numberOfDays"
            data-test="numDays"
            :errors="v$.numberOfDays.$errors"
        />
        <DateInput
            class="w-5/12 grow md:w-3/12"
            labelValues="Return date"
            :readonly="true"
            v-model="returnDate"
            data-test="return-date"
        />
        </div>
      <DescriptionArea class="my-2 md:my-3" v-model="holidayInfo.description" :errors="v$.description.$errors"/>
      <MainButton
          @click.prevent="submitForm"
          label="SUBMIT"
          class="bg-blue-100 my-6 h-12 mx-auto text-white font-bold rounded-md flex text-lg md:text-xl md:my-14"
          data-test="submit-button"
      />
    </form>
    <transition>
      <ModalWrapper :show="isHolidayCreated">
        <span>Your Holidays has been successfully created </span><SuccessIcon class="w-8 h-8"/>
      </ModalWrapper>
    </transition>
  </div>
</template>

<script setup lang="ts">
import MainButton from "../components/MainButton.vue";
import DescriptionArea from "../components/DescriptionArea.vue";
import DateInput from "../components/DateInput.vue";
import NumberInput from "../components/NumberInput.vue";
import {reactive, computed, ref, watch} from "vue";
import SelectOption from "../components/SelectOption.vue";
import {holidayOptions} from "../utils/data";
import dayjs from "dayjs";
import {HolidayInfo, KeyWord} from "../utils/type";
import useVuelidate from "@vuelidate/core";
import {helpers, required, requiredIf} from "@vuelidate/validators";
import {holidays} from "../store/loginStore";
import SuccessIcon from "../assets/Holidays-Icons/SuccessIcon.vue";
import {useRouter} from "vue-router";
import ModalWrapper from "../components/ModalWrapper.vue";

const router = useRouter();
defineProps({
  show: {
    type: Boolean,
    default: true,
  }
});
const emit = defineEmits(["closeModal"]);

type NewHolidayType = {
  starting: string;
  type: KeyWord;
  ending: string;
  numberOfDays?: string;
  creationDate?: string;
  returnDate?: string;
  description: string;
}


const holidayInfo = reactive<NewHolidayType>({
  starting: "",
  type: {} as KeyWord,
  ending: "",
  numberOfDays: "",
  returnDate: "",
  description: "",
  creationDate: "",
}) as NewHolidayType;

const hasError = ref(false);

const numberOfDays = computed(() => {
  const oneDay = 1000 * 3600 * 24;
  return ((dayjs(holidayInfo.ending).valueOf() - dayjs(holidayInfo.starting).valueOf())/oneDay).toString();
});
const returnDate = computed(() => dayjs(holidayInfo.ending).add(1, "day").format("YYYY-MM-DD"));
const isHolidayCreated = ref<boolean>(false);
const rules = computed(() => {
  return {
    starting: {
      required: helpers.withMessage("The starting date is required", required),
    },
    ending: {
      required: helpers.withMessage("The ending date is required", required),
    },
    type: {
      required: helpers.withMessage("The holiday type is required here", required),
    },
    numberOfDays: {
      requiredIf: helpers.withMessage("The starting and ending shouldn't be equal", requiredIf(holidayInfo.starting === holidayInfo.ending)),
    },
    description: {
      required: helpers.withMessage("The holiday description is required here", required),
    },
  }
})

const v$ = useVuelidate(rules, holidayInfo);
const submitForm = async (): Promise<void> => {
  const isFromValid = await v$.value.$validate();
  if (isFromValid && !hasError.value){
    holidays.value.push({
      type: holidayInfo.type,
      starting: holidayInfo.starting,
      ending: holidayInfo.ending,
      description: holidayInfo.description,
      numberOfDays: numberOfDays.value,
      returnDate: returnDate.value,
      creationDate: `${dayjs().hour()}h${dayjs().minute()}`,
    } as HolidayInfo);

    localStorage.setItem("allHolidays", JSON.stringify(holidays.value));
    isHolidayCreated.value = true;

    setTimeout(() => {
      isHolidayCreated.value = false;
      Object.assign(holidayInfo, {
        type: {},
        starting: "",
        ending: "",
        description: "",
        numberOfDays: "",
        returnDate: ""
      });
      v$.value.$reset();
      emit("closeModal");
      router.push("/holiday-list");
    }, 2000);
  }
  return;
};

watch(() => [holidayInfo.starting, holidayInfo.ending], ([newStarting, newEnding]) => {
  hasError.value = (newStarting > newEnding && newEnding.length > 0)
})
</script>