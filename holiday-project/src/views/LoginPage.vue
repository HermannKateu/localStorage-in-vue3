<template>
  <div
    class="h-screen bg-gray-100 md:bg-white flex flex-col md:justify-center md:py-16 md:h-fit"
  >
    <div
      class="text-base md:text-xl font-bold flex justify-center border border-gray-100 my-8 py-2 leading-tight text-center rounded-md mx-auto px-2 shadow-lg shadow-gray w-11/12 px-4 bg-white md:w-5/12"
      v-show="isUserDataCorrect"
      data-test="login-error-msg"
    >
      Sorry but it seems you do not appear to have an account
      please<span
        @click="goToSignUpPage"
        class="pl-1 text-blue-200 underline text-sm md:text-lg"
      >
        SignUp
      </span>
    </div>
    <form
      class="px-4 w-full flex flex-col mx-auto md:px-8 md:border md:border-white-200 md:shadow-lg md:shadow-gray-500 md:rounded-md md:w-[550px]"
      @submit.prevent="loginUser"
    >
      <div
        class="flex text-gray-800 flex-col font-WorkSans gap-y-1 pt-16 mb-4 md:items-center md:pt-18 md:gap-y-0"
      >
        <h1 class="font-semibold text-3xl md:text-5xl" data-test="title">
          Login
        </h1>
        <h3 class="text-base">
          Login into your account to see your personal information.
        </h3>
      </div>
      <div class="flex flex-col gap-y-4">
          <TextInput
              label="Email"
              placeholder="Enter your email..."
              v-model="loginInformation.email"
              :errors="v$.email.$errors"
          />
          <PasswordInput
            v-model="loginInformation.password"
            class="w-full"
            data-test-id="password"
            :errors="v$.password.$errors"
          />
      </div>
      <div class="flex justify-between my-4 font-WorkSans">
        <div class="text-gray text-base flex gap-x-3">
          <input type="checkbox" name="sign-in" id="sing-in" class="w-5 h-5" />
          <span>Remember me !</span>
        </div>
        <a
          href="#"
          class="underline text-blue-100 text-base font-WorkSans"
          >Forgot password ?</a
        >
      </div>
      <MainButton
        label="LOGIN"
        class="text-xl shadow-sm shadow-blue-600 my-12 flex flex-col justify-center items-center font-bold bg-blue-100 font-WorkSans uppercase rounded-md w-full text-center text-white h-12"
        data-test="login-button"
      />
      <span
          @click="goToSignUpPage"
          class="underline decoration-1 text-sm font-bold text-blue-100 font-WorkSans flex justify-end mb-6 md:text-sm cursor-pointer"
          data-test="sign-up-button"
      >
        SignUp
      </span>
    </form>
  </div>
</template>

<script setup lang="ts">
import PasswordInput from "../components/PasswordInput.vue";
import MainButton from "../components/MainButton.vue";
import {allUsers, currentUser, isLogin, User} from "../store/loginStore";
import { reactive, ref } from "@vue/runtime-core";
import {useRouter} from "vue-router";
import TextInput from "../components/TextInput.vue";
import useVuelidate from "@vuelidate/core";
import {email, helpers, minLength, required} from "@vuelidate/validators";
import {onBeforeMount} from "vue";

const isUserDataCorrect = ref(false);
const router = useRouter();

const loginInformation = reactive<User>({
  email: "",
  password: "",
});

const rules = {
    email: {
      required: helpers.withMessage("your email is required here", required),
      email
    },
  password: {
    required: helpers.withMessage("your password is required here", required),
    minLength: minLength(8),
  },
}

const goToSignUpPage = (): void => {
   router.push("/sign-up");
};

const v$ = useVuelidate(rules, loginInformation);
const users = ref<User[]>([])
onBeforeMount(() => {
   users.value = JSON.parse(localStorage.getItem("form") as string);
})
const loginUser = async (): Promise<void> => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid){
    if (users.value?.length > 0){
      if (users.value?.some(user => user.email === loginInformation.email && user.password === loginInformation.password)){
        isLogin.value = true;
        currentUser.value = users.value.find(user => user.email === loginInformation.email) as User;
        await router.push("/home");
        return;
      }
    }
      isLogin.value = false;
      isUserDataCorrect.value = true;
  }
};
</script>

<style scoped>
.input-border-error {
  pointer-events: none;
}
</style>
