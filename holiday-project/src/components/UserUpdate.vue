<template>
  <SideWrapper>
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
          v-model.trim="updateData.email"
          :errors="v$.email.$errors"
          data-test="email-input-update"
      />
      <PasswordInput
          label="Password"
          v-model.trim="updateData.password"
          :errors="v$.password.$errors"
          class="w-full"
          data-test="password-input-update"
      />
        <TextInput
            class="w-full" v-model.trim="updateData.firstName"
            :placeholder="t('label.firstname_lbl')"
            :label="t('label.firstname_lbl')"
            :errors="v$.firstName.$errors"
        />
        <TextInput
            class="w-full"
            v-model.trim="updateData.lastName"
            :placeholder="t('label.lastname_lbl')"
            :label="t('label.lastname_lbl')"
            :errors="v$.lastName.$errors"
        />
        <div
            data-test="update-user"
            @click.prevent="submitForm"
            :class="['text-base items-center  justify-center text-white bg-blue-800 w-full h-12 font-bold rounded-md flex my-8',
             hasUserChange ? 'cursor-pointer' : 'cursor-not-allowed'
        ]">
        {{ t("create_lbl") }}
      </div>
    </form>
    <div class="flex gap-x-3 items-center cursor-pointer text-sky-300 bottom-[90px] absolute md:bottom-[200px]" @click="$emit('close')">
      {{ t("close_lbl") }}  <ArrowRight class="hover:translate-x-4 duration-500"/>
    </div>
  </SideWrapper>
</template>

<script setup lang="ts">
import SideWrapper from "../components/SideWrapper.vue";
import ArrowRight from "../assets/holidays-foto/ArrowRight.vue";
import {computed, onBeforeMount, reactive, ref} from "vue";
import {email, helpers, minLength, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { User } from "../domain/user";
import TextInput from "./TextInput.vue";
import PasswordInput from "./PasswordInput.vue";
import {newNullUser} from "../domain/user";
import {useUserStore} from "../store/user";
import {useI18n} from "vue-i18n";

const emit = defineEmits(["close"]);

const user = ref<User>(newNullUser());

onBeforeMount(async () => {
  user.value = await useUserStore().getUser();

  updateData.firstName = user.value.firstName;
  updateData.lastName = user.value.lastName;
  updateData.password = user.value.password;
  updateData.email = user.value.email;
  updateData.id = user.value.id
})
type UserType = {
  id?: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const { t } = useI18n({
  useScope: "global",
  inheritLocale: true,
});

const updateData = reactive<UserType>({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
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
    firstName: {
      required: helpers.withMessage("your firstname is required here", required),
    },
    lastName: {
      required: helpers.withMessage("your lastname is required here", required),
    },
    email: {
      required: helpers.withMessage("your email is required here", required),
      email
    },
  }
})

const v$ = useVuelidate(rules, updateData);

const hasUserChange =
    computed<boolean>(() => JSON.stringify({
      email: updateData.email,
      password: updateData.password,
      firstName: updateData.firstName,
      lastName: updateData.lastName
    }) !== JSON.stringify({
      email: user.value.email,
      password: user.value.password,
      firstName: user.value.firstName,
      lastName: user.value.lastName
    }))
const submitForm = async (): Promise<void> => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid && hasUserChange.value){
    await useUserStore().updateUser(
        new User({
          id: updateData.id,
          firstName: updateData.firstName,
          lastName: updateData.lastName,
          email: updateData.email,
          password: updateData.password
        })
    )
    emit("close");
  }
};
</script>