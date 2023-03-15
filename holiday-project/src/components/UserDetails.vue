<template>
  <SideWrapper>
    <span class="flex border-b border-sky-300 pb-3 divide-x-2 divide-sky-300">
        <span class="font-bold flex flex-col" data-test="user-gender">
          <Person class="mr-4"/>
           {{ user.gender }}
        </span>
        <span class="font-bold flex text-3xl items-center pl-4" data-test="user-name">
          {{user.firstName?.toUpperCase()+ " " +user.lastName?.toUpperCase()}}
        </span>
    </span>
    <span class="text-sky-300 text-lg md:text-4xl ">
        {{ t("others_lbl") }}
      </span>
    <section class="flex flex-col gap-y-5">
      <ListWrapper :list="icons" @menu="selectedIcon">
        <template v-slot="{menu}">
            <span
                :class="['border-t-2 mt-2 pl-1', showList === menu.value?.toLowerCase() ? 'scale-down' : '']"
                v-if="showList === menu.value?.toLowerCase()"
            >
              <span class="flex flex-col  gap-y-2 max-h-[235px] scroll">
                <span v-for="(value, index) in menu.list" :key="index" class="text-sm leading-tight pt-1">.{{ t(value) }}</span>
              </span>
            </span>
        </template>
      </ListWrapper>
    </section>
    <div class="flex gap-x-3 items-center cursor-pointer text-sky-300 bottom-[120px] absolute md:bottom-[200px]" @click="$emit('close')">
      {{ t("close_lbl") }}  <ArrowRight class="hover:translate-x-4 duration-500"/>
    </div>
  </SideWrapper>
</template>

<script setup lang="ts">
import SideWrapper from "../components/SideWrapper.vue";
import ListWrapper from "./ListWrapper.vue";
import {icons} from "../utils/icon";
import {onBeforeMount, ref} from "vue";
import ArrowRight from "../assets/holidays-foto/ArrowRight.vue";
import Person from "../assets/holidays-foto/Person.vue";
import {useI18n} from "vue-i18n";
import {newNullUser, User} from "../domain/user";
import {useUserStore} from "../store/user";

defineEmits(["close"]);
const showList = ref<string>("");
const user = ref<User>(newNullUser());

onBeforeMount(async () => {
  user.value = await useUserStore().getUser();
})

const list = ["user.value_1", "user.value_2", "user.value_3", "user.value_4"];

const selectedIcon = (icon: string): void => {
  showList.value = list.find(menu => menu === icon) as string;
  if (icon === 'user.value_4') icons.find(element => element.value?.toLowerCase() === 'user.value_4' && element.list?.length === 1)?.list.push(`Your email is ${user.value?.email}`)
}

const { t } = useI18n({
  messages: {
    en: {
      "close_lbl": "Close:",
      "others_lbl": "OTHERS:",
    },
    fr: {
      "close_lbl": "Fermer:",
      "others_lbl": "AUTRES:",
    },
  },
});
</script>

<style scoped>
div {
  animation-iteration-count: infinite;
}

.scale-down {
  animation-name: scaling-down;
  animation-timing-function: linear;
  animation-duration: 2s;
  overflow: hidden;
}

@keyframes scaling-down {
  from {
    height: 0;
  }

  to {
    height: 100%;
  }
}
</style>