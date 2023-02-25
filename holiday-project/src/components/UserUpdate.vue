<template>
  <SideWrapper>
    <ModalWrapper :show="openModal" class="relative">
      <CommonSpinner />
    </ModalWrapper>
    <form
        class="w-full flex flex-col md:my-8 md:py-5 gap-y-2"
    >
      <h1 class="text-lg font-bold text-center text-blue-200">
        Update Account
      </h1>
      <TextInput
          label="Email"
          id="border h-10"
          placeholder="Ex holidayexample@gmail.com"
          v-model.trim="singUpData.email"
          :errors="v$.email.$errors"
          data-test="email-unput"
      />
      <PasswordInput
          label="Password"
          v-model.trim="singUpData.password"
          :errors="v$.password.$errors"
          class="w-full"
          data-test="password-input"
      />
        <TextInput class="w-full" v-model.trim="singUpData.firstname" placeholder="firstname" label="Firstname" :errors="v$.firstname.$errors"/>
        <TextInput class="w-full" v-model.trim="singUpData.lastname" placeholder="lastname" label="Lastname" :errors="v$.lastname.$errors"/>
        <div
            @click.prevent="submitForm"
            :class="['text-base items-center  justify-center text-white bg-blue-800 w-full h-10 font-bold rounded-md flex my-8',
             hasUserChange ? 'cursor-pointer' : 'cursor-not-allowed'
        ]">
        Create Account
      </div>
    </form>
    <div class="flex gap-x-3 items-center cursor-pointer text-sky-300 bottom-[90px] absolute md:bottom-[200px]" @click="$emit('close')">
      Close:  <ArrowRight class="hover:translate-x-4 duration-500"/>
    </div>
  </SideWrapper>
</template>

<script setup lang="ts">
import SideWrapper from "../components/SideWrapper.vue";
import ArrowRight from "../assets/holidays-foto/ArrowRight.vue";
import {computed, onBeforeMount, reactive, ref} from "vue";
import {email, helpers, minLength, required, sameAs} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {allUsers, currentUser, FORM_DATA, User} from "../store/loginStore";
import TextInput from "./TextInput.vue";
import PasswordInput from "./PasswordInput.vue";
import MainButton from "./MainButton.vue";
import ModalWrapper from "./ModalWrapper.vue";
import CommonSpinner from "./CommonSpinner.vue";

const emit = defineEmits(["close"]);
const openModal = ref<boolean>(false);

window.addEventListener("load", () => {
  currentUser.value = JSON.parse(localStorage.getItem("user") as string);

  singUpData.email = currentUser.value.email;
  singUpData.firstname = currentUser.value.firstname as string;
  singUpData.lastname = currentUser.value.lastname as string;
  singUpData.password = currentUser.value.password;
});

type UserType = {
  email: string;
  age?: number;
  password: string;
  firstname: string;
  lastname: string;
}

const singUpData = reactive<UserType>({
  email: "",
  password: "",
  firstname: "",
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

const hasUserChange =
    computed<boolean>(() => JSON.stringify({
      email: singUpData.email,
      password: singUpData.password,
      firstname: singUpData.firstname,
      lastname: singUpData.lastname
    }) !== JSON.stringify({
      email: currentUser.value.email,
      password: currentUser.value.password,
      firstname: currentUser.value.firstname,
      lastname: currentUser.value.lastname
    }))
const submitForm = async (): Promise<void> => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid && hasUserChange.value){
    allUsers.splice(allUsers.indexOf(allUsers.find(user => user.email === currentUser.value.email) as User), 1);
    localStorage.setItem(FORM_DATA, JSON.stringify(allUsers));
     currentUser.value = singUpData;
     openModal.value = true;
     setTimeout(() => {
       localStorage.setItem("user", JSON.stringify(currentUser.value))
       emit("close");
       openModal.value = false;
     },2000)
  }
};
</script>