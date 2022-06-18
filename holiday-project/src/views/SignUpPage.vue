<template> 
    <div class="bg-gray-100 h-screen md:bg-white flex flex-col md:justify-center font-WorkSans py-8">
        <div class="text-base md:text-xl font-bold flex justify-center border border-gray-100 my-8 py-3 text-center rounded-md
            mx-auto px-2 shadow-lg shadow-gray w-11/12 px-4 bg-white md:w-5/12" v-show="ownAccount" data-test="sign-up-error">
            It seems as if user already have such an emai. If you are the one please <router-link to="/" class="pl-2 text-blue-200 underline text-base md:text-xl">Login</router-link> 
        </div>
        <form  class="px-4 gap-y-3 w-full flex flex-col md:w-[750px] mx-auto md:px-8 md:border md:border-white-200 
             md:shadow-2xl md:shadow-gray-500 md:rounded-md md:py-16" @submit.prevent="signUpData">
            <h1 class="text-center text-2xl font-semibold md:text-4xl">
                SignUp
            </h1>
            <EmailInput v-model.trim="singUpData.email" class="w-full" data-test="email-unput"/>
             <PasswordInput v-model.trim="singUpData.password" class="w-full" data-test-id="input-password" data-test="password-input"/>
             <label for="age" class="text-gray-300 text-lg font-WorkSans">
                Age
             </label>
            <input type="number" class="h-[55px] outline-none text-base border my-2 border-gray-500 pl-5 rounded-md
              focus:border-gray-700  ease-in-out duration-500  bg-gray-100 shadow-sm shadow-gray-200 hover:shadow-gray-600 
              hover:shadow-xl md:h-16 border border-gray md:text-xl"
               placeholder="Enter age" v-model.trim="singUpData.age" min="1" max="100" data-test="age-input">   
            <div class="flex gap-x-12">
                <label for="sex" class="text-base text-gray-500">Male
                   <input type="radio" name="sex" id="male" class="w-4 h-4 focus:animate-spin" value="Male" v-model="singUpData.sex">
                </label>
                <label for="sex" class="text-base text-gray-500">Female
                    <input type="radio" name="sex" id="female" value="Female" class="w-4 h-4" v-model="singUpData.sex">
                </label>
            </div>
            <MainButton label="SUBMIT" class="text-base text-white bg-blue-800 w-full
              h-12 font-bold rounded-md shadow-lg shadow-blue-400 flex 
             hover:shadow-2xl ease-in-out duration-1000 mx-auto my-6 md:h-14 md:text-xl" @click="submitForm" 
             data-test="submit-button"/>
        </form>
    </div>
</template>

<script setup>
import { router } from "../router";
import { reactive, ref } from "vue";
import { FORM_DATA } from "../store/loginStore.ts";
import EmailInput from "../components/EmailInput.vue";
import PasswordInput from "../components/PasswordInput.vue";
import MainButton from "../components/MainButton.vue";
import { isLogin, allUsers } from "../store/loginStore";

const ownAccount = ref(false);
const singUpData = reactive({
  email: "",
  age: null,
  password: "",
  sex: ""
});

const submitForm = () => {
    if(singUpData.email === "" || singUpData.password === ""){
        alert("Fill in all the form fields please");
    }
    else return accountExist();
};

const accountExist = () => {
    const checkData = JSON.parse(localStorage.getItem(FORM_DATA));
    if(localStorage.length === 0){
       localStorage.setItem(FORM_DATA, JSON.stringify(singUpData));
       isLogin.value = true;
       return router.push("/home"); 
    }
    // else if(localStorage.length > 0 || singUpData.email !== checkData.email){
    //    localStorage.setItem(FORM_DATA, JSON.stringify(singUpData));
    //    isLogin.value = true;
    //    return router.push("/home");
    // }
    else if(singUpData.email === checkData.email){
       return ownAccount.value = true;
    }
}
</script>

<style scoped></style>