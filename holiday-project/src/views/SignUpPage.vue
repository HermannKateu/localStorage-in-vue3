<template>
  <div
    class="bg-gray-100 md:bg-white h-screen flex flex-col md:justify-center font-WorkSans md:h-fit"
  >
    <div
      class="text-base md:text-xl leading-tight font-bold flex justify-center border border-gray-100 my-8 p-3 text-center rounded-md mx-auto px-2 shadow-lg shadow-gray w-11/12 px-4 bg-white md:w-5/12"
      v-show="ownAccount"
      data-test="sign-up-error"
    >
      It seems as if a user already have this email. If you are the one please
      <span
        @click="$router.push('/')"
        class="pb-1 text-blue-200 underline text-base md:text-xl"
        >Login</span
      >
    </div>
    <form
      class="px-4 w-full flex flex-col mx-auto md:my-16 md:px-8 md:border md:border-white-200 md:shadow-lg md:shadow-gray-500 md:rounded-md md:w-[550px] gap-y-2"
      @submit.prevent="submitForm"
    >
      <h1 class="text-center text-2xl font-semibold md:text-4xl mt-5">
        SignUp
      </h1>
      <TextInput
          label="Email"
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
      <div class="flex gap-x-12">
        <label
          for="sex"
          class="text-base text-gray-500 flex items-center gap-x-2"
          >Male
          <input
            type="radio"
            name="sex"
            id="male"
            class="w-4 h-4 focus:animate-spin"
            value="Male"
            v-model="singUpData.sex"
          />
        </label>
        <label
          for="sex"
          class="text-base text-gray-500 flex items-center gap-x-2"
          >Female
          <input
            type="radio"
            name="sex"
            id="female"
            value="Female"
            class="w-4 h-4"
            v-model="singUpData.sex"
          />
        </label>
      </div>
      <MainButton
        label="Create Account"
        class="text-base text-white bg-blue-800 w-full h-12 font-bold rounded-md shadow-lg shadow-blue-400 flex hover:shadow-2xl ease-in-out duration-1000 mx-auto my-6 md:h-12 md:text-xl"
        data-test="submit-button"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import { FORM_DATA } from "../store/loginStore";
import PasswordInput from "../components/PasswordInput.vue";
import MainButton from "../components/MainButton.vue";
import { allUsers, User, currentUser } from "../store/loginStore";
import {useRouter} from "vue-router";
import TextInput from "../components/TextInput.vue";
import {email, helpers, minLength, required, sameAs} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const ownAccount = ref(false);
const router = useRouter();
type UserType = {
  email: string;
  age?: number;
  password: string;
  firstname: string;
  confirmPassword: string;
  lastname: string;
  sex: string;
}
const singUpData = reactive<UserType>({
  email: "",
  age: 1,
  password: "",
  firstname: "",
  confirmPassword: "",
  lastname: "",
  sex: "",
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
    if (!allUsers.length) {
      allUsers.push(singUpData)
      currentUser.value = singUpData
      localStorage.setItem(FORM_DATA, JSON.stringify(allUsers));
      console.log(allUsers)
      await router.push("/home");
      return
    } else if (allUsers.length && allUsers.every(user => user.email !== singUpData.email)) {
      currentUser.value = singUpData
      allUsers.push(singUpData)
      localStorage.setItem(FORM_DATA, JSON.stringify(allUsers));
      await router.push("/home");
      return
    } else if (!!allUsers.find(user => user.email === singUpData.email)) {
      ownAccount.value = true;
      return
    }
  }
};
</script>
