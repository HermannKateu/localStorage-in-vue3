<template>
  <div
    class="bg-gray-100 md:bg-white mobile:min-h-screen flex flex-col md:h-auto md:justify-center font-WorkSans"
  >
    <div
      class="text-base md:text-xl max-w-[550px] leading-tight font-bold flex
       justify-center border border-gray-100 my-8 p-3 text-center rounded-md mx-auto
        px-2 shadow-lg shadow-gray w-11/12 px-4 bg-white md:w-5/12"
      v-if="errorStore.email"
      data-test="sign-up-error"
    >
      {{ t("sign-up.description_lbl") }}
      <span
        @click="$router.push('/')"
        class="pb-1 cursor-pointer px-2 text-blue-200 underline text-base md:text-xl"
        >{{ t("login_lbl") }}</span
      >
    </div>
    <form
      class="px-4 w-full flex flex-col mt-8 mx-auto md:px-8 md:border md:py-5
      md:border-white-200 md:shadow-lg md:shadow-gray-500 md:rounded-md md:w-[550px] gap-y-3"
      @submit.prevent="submitForm"
    >
      <h1 class="text-center text-2xl font-semibold md:text-4xl mt-5">
        {{ t("sign-up.title_lbl") }}
      </h1>
      <TextInput
          :label="t('label.email_lbl')"
          placeholder="Ex holidayexample@gmail.com"
          v-model="singUpData.email"
          :errors="v$.email.$errors"
          data-test="email-input"
      />
      <PasswordInput
          :label="t('label.password_lbl')"
          v-model="singUpData.password"
          :errors="v$.password.$errors"
          class="w-full"
          data-test="password-input-1"
      />
      <PasswordInput
          :label="t('label.password_2_lbl')"
          v-model="singUpData.confirmPassword"
          :errors="v$.confirmPassword.$errors"
          class="w-full"
          data-test="password-confirmation-input"
      />
      <div class="flex gap-x-4 w-full">
        <TextInput
            class="w-1/2"
            v-model="singUpData.firstname"
            :placeholder="t('label.firstname_lbl')"
            :label="t('label.firstname_lbl')"
            :errors="v$.firstname.$errors"
            data-test="user-firstname"
        />
        <TextInput
            class="w-1/2"
            v-model="singUpData.lastname"
            :placeholder="t('label.lastname_lbl')"
            :label="t('label.lastname_lbl')"
            :errors="v$.lastname.$errors"
            data-test="user-lastname"
        />
      </div>
      <div class="flex gap-x-12">
        <label
          for="sex"
          class="text-base text-gray-500 flex items-center gap-x-2"
          >Male
          <input
              data-test="male"
              type="radio"
              class="w-4 h-4"
              :value="t('gender.male_lbl')"
              v-model="singUpData.gender"
          />
        </label>
        <label
          for="sex"
          class="text-base text-gray-500 flex items-center gap-x-2"
          >Female
          <input
              data-test="female"
            type="radio"
            :value="t('gender.female_lbl')"
            class="w-4 h-4 accent-pink-500"
            v-model="singUpData.gender"
          />
        </label>
      </div>
      <MainButton
        :label="t('label.create_btn')"
        class="text-base text-white bg-blue-800 w-full h-12 font-bold rounded-md shadow-lg shadow-blue-400 flex
         hover:shadow-2xl ease-in-out duration-1000 mx-auto my-6 md:h-14 md:text-xl"
        data-test="submit-button"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import {computed, reactive, ref, watch} from "vue";
import PasswordInput from "../components/PasswordInput.vue";
import MainButton from "../components/MainButton.vue";
import {useRouter} from "vue-router";
import TextInput from "../components/TextInput.vue";
import {email, helpers, minLength, required, sameAs} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { useI18n } from "vue-i18n";
import {useAuthenticationStore} from "../store/authentication";
import {User} from "../domain/user";
import {useErrorStore} from "../store/error";
import { Error } from "../utils/type"

const { t } = useI18n({
  useScope: "global",
  inheritLocale: true,
});

const router = useRouter();

type UserType = {
  email: string;
  password: string;
  firstname: string;
  confirmPassword: string;
  lastname: string;
  gender: string;
}
const singUpData = reactive<UserType>({
  email: "",
  password: "",
  firstname: "",
  confirmPassword: "",
  lastname: "",
  gender: "",
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
});

const $externalResults = reactive({} as Error);

const v$ = useVuelidate(rules, singUpData, {
  $externalResults,
});
const errorStore = computed(() => useErrorStore().error);
const submitForm = async (): Promise<void> => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid){
    await useAuthenticationStore().createUser(new User({
      email: singUpData.email,
      password: singUpData.confirmPassword,
      lastName: singUpData.lastname,
      firstName: singUpData.firstname,
      gender: singUpData.gender
    }));
      if (errorStore.value.email) {
        Object.assign($externalResults, { email: t(errorStore.value.email) });
      return;
    }
    await router.push("/home");
  }
};


watch(
    () => singUpData.email,
    (newValue) => {
      if (newValue && $externalResults.email) {
        Object.assign($externalResults, { email: "" });
      }
    }
);
</script>
