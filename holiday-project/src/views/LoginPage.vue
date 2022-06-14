<template>
  <div class="bg-gray-100 h-screen md:bg-white flex flex-col md:justify-center">
    <div class="text-base md:text-xl font-bold flex justify-center border border-gray-100 my-8 py-3 text-center rounded-md
     mx-auto px-2 shadow-lg shadow-gray w-11/12 px-4 bg-white md:w-5/12" v-show="isUserDataCorrect">
       Sorry but it seems you do not apprear to have an account please<router-link to="/sign-up" class="pl-1 text-blue-200 underline text-base md:text-xl"> SignUp
      </router-link>
    </div>
    <form class="px-4 w-full flex flex-col mx-auto md:px-8 md:border md:border-white-200 
    md:shadow-lg md:shadow-gray-500 md:rounded-md md:w-[750px]" @submit.prevent="submitForm">
      <div class="flex text-gray-800 flex-col font-WorkSans gap-y-1 pt-16 mb-4 md:items-center md:pt-18 md:gap-y-0">
        <h1 class="font-semibold text-3xl md:text-5xl">Login</h1>
        <h3 class="text-base">Lorem ipsum dolor sit amet, consectetur.</h3>
      </div>
      <div class="flex flex-col gap-y-5">
        <div class="flex flex-col gap-y-1">
          <EmailInput v-model="formValues.email" class="w-full"/>
          <span v-show="formValues.emailError" class="flex text-lg text-red-900">Please fill in the require Email field !!!!!</span>
        </div>
        <div class="flex flex-col gap-1">
          <PasswordInput v-model="formValues.password" class="w-full"/>
          <span v-show="formValues.passwordError" class="flex text-lg text-red-900">Please fill in the require Password field !!!!!</span>
        </div>
      </div>
      <div class="flex justify-between my-4 font-WorkSans ">
        <div class="text-gray text-base flex gap-x-3">
          <input type="checkbox" name="sign-in" id="sing-in" class="w-5 h-5">
          <span>Remember me !</span>
        </div>
        <a href="#" target="_blank" class="underline text-blue-100 text-base font-WorkSans ">Forgot password ?</a>
      </div>
        <MainButton label="LOGIN" class="text-xl shadow-2xl shadow-blue-600 my-12 flex flex-col justify-center items-center font-bold bg-blue-100
          font-WorkSans uppercase rounded-md  w-full text-center text-white h-14 md:h-16" 
          @click="submitForm"  :class="!formValues.disabled && 'input-border-error'"  data-test="login-button"/>
        <router-link to="/sign-up" class="underline decoration-2 text-xl font-bold text-blue-100 font-WorkSans flex justify-end mb-8">
          SignUp
        </router-link>
    </form>
  </div>
</template>

<script setup>
import { router } from "../router";
import EmailInput from "../components/EmailInput.vue";
import PasswordInput from "../components/PasswordInput.vue";
import MainButton from "../components/MainButton.vue";
import { isLogin } from "../store/loginStore.ts";
import { reactive, ref } from "@vue/runtime-core";
import { FORM_DATA } from "../store/loginStore.ts";

const isUserDataCorrect = ref(false);

const formValues = reactive({
  email: "",
  password: "",
  emailError: false,
  passwordError: false,
  disabled: true
}); 

const toSignUpPage = () => {
  return router.push("/sign-up")
}

const submitForm = () => {
  if(formValues.email === "" && formValues.password === ""){
    formValues.emailError = true;
    formValues.passwordError = true;
  }
  else if(formValues.email === ""){
    formValues.emailError = true;
    formValues.passwordError = false;
  }
  else if(formValues.password === ""){
    formValues.emailError = false;
    formValues.passwordError = true;
  }
  else{
    formValues.emailError = false;
    formValues.passwordError = false;
    isLogin.value = true;
    return loginUser();
  }
}

const loginUser = () => {
  const Retreive_Form_Data = JSON.parse(localStorage.getItem(FORM_DATA));
  
  if(formValues.email === Retreive_Form_Data.email && formValues.password === Retreive_Form_Data.password){
    return router.push("/home");
  }
  else return isUserDataCorrect.value = true;
};

</script>

<style scoped>
.input-border-error{
  pointer-events:none;
}
</style>