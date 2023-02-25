<template>
  <SideWrapper>
    <form
        class="w-full flex flex-col md:my-16 md:py-5 gap-y-2"
        @submit.prevent="submitForm"
    >
      <h1 class="text-lg font-bold text-center text-blue-200">
        Update Account
      </h1>
      <TextInput
          label="Email"
          id="border h-10"
          placeholder="Ex holidayexample@gmail.com"
          v-model="singUpData.email"
          :errors="v$.email.$errors"
          data-test="email-unput"
      />
      <PasswordInput
          label="Password"
          v-model="singUpData.password"
          :errors="v$.password.$errors"
          class="w-full"
          data-test="password-input"
      />
      <PasswordInput
          label="Password Confirmation"
          v-model="singUpData.confirmPassword"
          :errors="v$.confirmPassword.$errors"
          class="w-full"
          data-test-id="input-password"
          data-test="password-input"
      />
      <div class="flex gap-x-4 w-full">
        <TextInput class="w-1/2" v-model="singUpData.firstname" placeholder="firstname" label="Firstname" :errors="v$.firstname.$errors"/>
        <TextInput class="w-1/2" v-model="singUpData.lastname" placeholder="lastname" label="Lastname" :errors="v$.lastname.$errors"/>
      </div>
      <MainButton
          label="Create Account"
          class="text-base text-white bg-blue-800 w-full h-12 font-bold rounded-md flex hover:shadow-2xl ease-in-out duration-1000 mx-auto my-6 md:h-12 md:text-xl"
          data-test="submit-button"
      />
    </form>
    <div class="flex gap-x-3 items-center cursor-pointer text-sky-300 bottom-[90px] absolute md:bottom-[200px]" @click="$emit('close')">
      Close:  <ArrowRight class="hover:translate-x-4 duration-500"/>
    </div>
  </SideWrapper>
</template>

<script setup lang="ts">
import SideWrapper from "../components/SideWrapper.vue";
import ArrowRight from "../assets/holidays-foto/ArrowRight.vue";
import {computed, reactive} from "vue";
import {email, helpers, minLength, required, sameAs} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {allUsers, currentUser, FORM_DATA} from "../store/loginStore";
import TextInput from "./TextInput.vue";
import PasswordInput from "./PasswordInput.vue";
import MainButton from "./MainButton.vue";

defineEmits(["close"]);

type UserType = {
  email: string;
  age?: number;
  password: string;
  firstname: string;
  confirmPassword: string;
  lastname: string;
}

const singUpData = reactive<UserType>({
  email: "",
  age: 1,
  password: "",
  firstname: "",
  confirmPassword: "",
  lastname: "",
});


const passwordValidator = (value: string): boolean =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/.test(value);

const rules = computed(() => {
  return {
    password: {
      required: helpers.withMessage("your password is required here", required),
      minLength: minLength(8),
      passwordValidator: helpers.withMessage("your password should have at least one letter and one number", passwordValidator)
    },
    confirmPassword: {
      sameAs: helpers.withMessage("your confirmation password should be the same with the one above", sameAs(singUpData.password))
    },
    firstname: {
      required: helpers.withMessage("your firstname is required here", required),
    },
    lastname: {
      required: helpers.withMessage("your lastname is required here", required),
    },
    email: {
      required: helpers.withMessage("your email is required here", required),
      email
    },
  }
})

const v$ = useVuelidate(rules, singUpData);
const submitForm = async (): Promise<void> => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid){
    if (!allUsers?.length) {
      allUsers.push(singUpData)
      currentUser.value = singUpData;
      localStorage.setItem("user", JSON.stringify(singUpData));
      localStorage.setItem(FORM_DATA, JSON.stringify(allUsers));
      // await router.push("/home");
      return
    } else if (allUsers?.length && allUsers?.every(user => user.email !== singUpData.email)) {
      currentUser.value = singUpData;
      localStorage.setItem("user", JSON.stringify(singUpData));
      allUsers.push(singUpData)
      localStorage.setItem(FORM_DATA, JSON.stringify(allUsers));
      // await router.push("/home");
      return
    } else if (!!allUsers?.find(user => user.email === singUpData.email)) {
      // ownAccount.value = true;
      return
    }
  }
};
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>