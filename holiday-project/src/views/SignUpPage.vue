<template>
  <div
    class="bg-gray-100 md:bg-white h-screen flex flex-col md:justify-center font-WorkSans py-16 md:h-fit"
  >
    <div
      class="text-base md:text-xl font-bold flex justify-center border border-gray-100 my-8 py-3 text-center rounded-md mx-auto px-2 shadow-lg shadow-gray w-11/12 px-4 bg-white md:w-5/12"
      v-show="ownAccount"
      data-test="sign-up-error"
    >
      It seems as if a user already have this email. If you are the one please
      <router-link
        to="/"
        class="pl-2 text-blue-200 underline text-base md:text-xl"
        >Login</router-link
      >
    </div>
    <form
      class="px-4 w-full flex flex-col mx-auto md:px-8 md:border md:border-white-200 md:shadow-lg md:shadow-gray-500 md:rounded-md md:w-[550px] md:h-[600px] gap-y-3"
      @submit.prevent="submitForm"
    >
      <h1 class="text-center text-2xl font-semibold md:text-4xl py-3">
        SignUp
      </h1>
      <EmailInput
        v-model.trim="singUpData.email"
        class="w-full"
        data-test="email-unput"
      />
      <PasswordInput
        v-model.trim="singUpData.password"
        class="w-full"
        data-test-id="input-password"
        data-test="password-input"
      />
<!--      <div class="flex flex-col">-->
<!--        <label for="age" class="text-gray-300 text-lg font-WorkSans">-->
<!--          Age-->
<!--        </label>-->
<!--        <input-->
<!--          type="number"-->
<!--          class="h-[55px] outline-none text-base border my-2 border-gray-500 pl-5 rounded-md focus:border-gray-700 ease-in-out duration-500 bg-gray-100 shadow-sm shadow-gray-200 hover:shadow-gray-600 hover:shadow-xl md:h-16 border border-gray md:text-xl"-->
<!--          placeholder="Enter age"-->
<!--          v-model.trim="singUpData.age"-->
<!--          min="1"-->
<!--          max="100"-->
<!--          data-test="age-input"-->
<!--        />-->
<!--      </div>-->
      <div class="flex gap-x-4 w-full">
        <TextInput class="w-1/2" v-model="singUpData.firstname" placeholder="Enter your firstname" label="Firstname"/>
        <TextInput class="w-1/2" v-model="singUpData.lastname" placeholder="Enter your lastname" label="Lastname"/>
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
        label="SUBMIT"
        class="text-base text-white bg-blue-800 w-full h-12 font-bold rounded-md shadow-lg shadow-blue-400 flex hover:shadow-2xl ease-in-out duration-1000 mx-auto my-6 md:h-12 md:text-xl"
        @click="submitForm"
        data-test="submit-button"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { FORM_DATA } from "../store/loginStore";
import EmailInput from "../components/EmailInput.vue";
import PasswordInput from "../components/PasswordInput.vue";
import MainButton from "../components/MainButton.vue";
import { allUsers, User, currentUser } from "../store/loginStore";
import {useRouter} from "vue-router";
import TextInput from "../components/TextInput.vue";

const ownAccount = ref(false);
const router = useRouter();
const singUpData = reactive<User>({
  email: "",
  age: 1,
  password: "",
  firstname: "",
  lastname: "",
  sex: "",
});

const submitForm = () => {
  if (singUpData.email === "" || singUpData.password === "") {
    alert("Fill in all the form fields please");
  } else return accountExist();
};

const accountExist = () => {
  if (!allUsers.length) {
    allUsers.push(singUpData)
    currentUser.value = singUpData
    localStorage.setItem(FORM_DATA, JSON.stringify(allUsers));
     router.push("/home");
     return
  } else if (allUsers.length > 0 && allUsers.every(user => user.email !== singUpData.email)) {
    currentUser.value = singUpData
    allUsers.push(singUpData)
    localStorage.setItem(FORM_DATA, JSON.stringify(allUsers));
     router.push("/home");
     return
  } else if (!!allUsers.find(user => user.email === singUpData.email)) {
     ownAccount.value = true;
    return
  }
};
</script>
