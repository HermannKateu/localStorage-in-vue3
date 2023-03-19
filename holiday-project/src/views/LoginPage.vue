<template>
  <div
    class="min-h-screen bg-gray-100 md:bg-white flex flex-col md:items-center md:py-16 md:max-h-screen"
  >
  <div class="flex flex-col">
    <div
      class="text-base md:text-xl font-bold flex border border-gray-100 py-2 leading-tight text-center rounded-md mx-auto px-2 shadow-lg shadow-gray w-11/12 px-4 bg-white w-[550px]"
      v-if="errorStore.email"
      data-test="login-error-msg"
    >
      <span class="w-10/12">{{ t("login.auth_lbl") }}</span>
      <span
        @click="goToSignUpPage"
        class="pl-1 text-blue-200 underline text-sm md:text-lg w-2/12"
      >
      {{ t("sign-up.title_lbl") }}
      </span>
    </div>
    <form
      class="px-4 w-full flex flex-col mx-auto md:px-8 md:border md:border-white-200 md:shadow-lg md:shadow-gray-500 md:rounded-md md:w-[450px]"
      @submit.prevent="loginUser"
    >
      <div
        class="flex text-gray-800 flex-col font-WorkSans gap-y-1 pt-16 mb-4 md:items-center md:pt-6 md:gap-y-0"
      >
        <h1 class="font-semibold text-3xl md:text-5xl" data-test="title">
          {{ t("login_lbl") }}
        </h1>
        <h3 class="text-base">
          {{ t("login.description_lbl") }}
        </h3>
      </div>
      <div class="flex flex-col gap-y-4">
          <TextInput
              data-test="email-input"
              :label="t('label.email_lbl')"
              placeholder="Ex holidayexample@gmail.com"
              v-model="loginInformation.email"
              :errors="v$.email.$errors"
          />
          <PasswordInput
              :label="t('label.password_lbl')"
              v-model="loginInformation.password"
              class="w-full"
              data-test="password-input-1"
              :errors="v$.password.$errors"
          />
      </div>
      <div class="flex justify-between my-4 font-WorkSans">
        <div class="text-gray text-base flex gap-x-3">
          <input type="checkbox" name="sign-in" id="sing-in" class="w-5 h-5" />
          <span>{{ t("login.remember_lbl") }}</span>
        </div>
        <a
          href="#"
          class="underline text-blue-100 text-base font-WorkSans"
          >{{ t("login.forgotten_lbl") }}</a
        >
      </div>
      <MainButton
        :label="t('login_lbl')?.toUpperCase()"
        class="text-xl shadow-sm shadow-blue-600 my-2 flex flex-col justify-center items-center font-bold bg-blue-100 font-WorkSans uppercase rounded-md w-full text-center text-white h-10"
        data-test="login-button"
      />
      <span
          @click="goToSignUpPage"
          class="underline decoration-1 text-sm font-bold text-blue-100 font-WorkSans flex justify-end mb-6 md:text-sm cursor-pointer"
          data-test="sign-up-button"
      >
        {{ t("sign-up.title_lbl") }}
      </span>
    </form>
  </div>
  </div>
</template>

<script setup lang="ts">
import PasswordInput from "../components/PasswordInput.vue";
import MainButton from "../components/MainButton.vue";
import { reactive } from "@vue/runtime-core";
import {useRouter} from "vue-router";
import TextInput from "../components/TextInput.vue";
import useVuelidate from "@vuelidate/core";
import {email, helpers, minLength, required} from "@vuelidate/validators";
import {computed, watch} from "vue";
import {useI18n} from "vue-i18n";
import {useAuthenticationStore} from "../store/authentication";
import { User } from "../domain/user";
import {Error} from "../utils/type";
import {useErrorStore} from "../store/error";

const { t } = useI18n({
  useScope: "global",
  inheritLocale: true,
});

const router = useRouter();

type UserType = {
  email: string;
  password: string;
}
const loginInformation = reactive<UserType>({
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
const errorStore = computed(() => useErrorStore().error);

const $externalResults = reactive({} as Error);


const goToSignUpPage = (): void => {
   router.push("/sign-up");
};

const v$ = useVuelidate(rules, loginInformation, {
  $externalResults
});
const loginUser = async (): Promise<void> => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid) {
    const token = await useAuthenticationStore().connectUser(new User({
      email: loginInformation.email,
      password: loginInformation.password
    }));

    if (errorStore.value.email || errorStore.value.password){
      if (errorStore.value.email) {
        Object.assign($externalResults, { email: t(errorStore.value.email) });
      }
      if(errorStore.value.password) {
        Object.assign($externalResults, { password: t(errorStore.value.password) });
      }
      return;
    }
    if(token){
      localStorage.setItem("token", JSON.stringify(token))
      await router.push("/home");
    }
  }
};


watch(
    () => loginInformation.email,
    (newValue) => {
      if (newValue && $externalResults.email) {
        Object.assign($externalResults, { email: "" });
      }
    }
);

watch(
    () => loginInformation.password,
    (newValue) => {
      if (newValue && $externalResults.password) {
        Object.assign($externalResults, { password: "" });
      }
    }
);
</script>

<style scoped>
.input-border-error {
  pointer-events: none;
}
</style>
