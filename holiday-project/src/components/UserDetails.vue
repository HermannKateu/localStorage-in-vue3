<template>
  <SideWrapper>
    <span class="flex border-b border-sky-300 pb-3 divide-x-2 divide-sky-300">
        <span class="font-bold flex flex-col">
          <Person class="mr-4"/>
           {{currentUser.sex}}
        </span> <span class="font-bold flex text-3xl items-center pl-4">{{currentUser.firstname?.toUpperCase()+ " " +currentUser.lastname?.toUpperCase()}}</span>
    </span>
    <span class="text-sky-300 text-lg md:text-4xl ">
        OTHERS:
      </span>
    <section class="flex flex-col gap-y-5">
      <ListWrapper :list="icons" @menu="selectedIcon">
        <template v-slot="{menu}">
            <span
                :class="['border-t-2 mt-2 pl-1', showList === menu.value?.toLowerCase() ? 'scale-down' : '']"
                v-if="showList === menu.value?.toLowerCase()"
            >
              <span class="flex flex-col  gap-y-2 max-h-[235px] scroll">
                <span v-for="(value, index) in menu.list" :key="index" class="text-sm leading-tight pt-1">.{{ value }}</span>
              </span>
            </span>
        </template>
      </ListWrapper>
    </section>
    <div class="flex gap-x-3 items-center cursor-pointer text-sky-300 bottom-[120px] absolute md:bottom-[200px]" @click="$emit('close')">
      Close:  <ArrowRight class="hover:translate-x-4 duration-500"/>
    </div>
  </SideWrapper>
</template>

<script setup lang="ts">
import SideWrapper from "../components/SideWrapper.vue";
import ListWrapper from "./ListWrapper.vue";
import {icons} from "../utils/icon";
import {ref} from "vue";
import {currentUser} from "../store/loginStore";
import ArrowRight from "../assets/holidays-foto/ArrowRight.vue";
import Person from "../assets/holidays-foto/Person.vue";

defineEmits(["close"]);
const showList = ref<string>("");

const list = ["contact", "settings", "documentation", "email"];

const selectedIcon = (icon: string): void => {
  showList.value = list.find(menu => menu === icon) as string;
  if (icon === 'email') icons.find(element => element.value?.toLowerCase() === 'email' && element.list?.length === 1)?.list.push(`Your email is ${currentUser.value?.email}`)
}
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