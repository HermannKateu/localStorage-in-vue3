<template>
  <section class="shadow-md shadow-sky-200 font-bold border bg-opacity-70 bg-black w-full z-40 h-screen md:h-[90vw] md:fixed absolute">
    <section class="w-full md:w-[330px] fixed h-full right-0  flex flex-col pt-3 px-6 gap-y-4 bg-white shadow-md shadow-white">
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
<!--        <span v-for="(icon, index) in icons" :key="index"-->
<!--              class="p-1.5 bg-sky-100 rounded flex flex-col justify-center cursor-not-allowed hover:translate-x-5  duration-500"-->
<!--        >-->
<!--          <span class="flex space-x-3" @click="showList = !showList">-->
<!--          <component :is="icon.icon" class="w-[25px] h-[25px]"/> <span>{{icon.value}}</span>-->
<!--          </span>-->
<!--          <ul :class="['border-t-2 mt-1 pl-1', showList ? 'scale-down' : '']" v-if="showList">-->
<!--            <li v-for="(value, index) in icon.list" :key="index" class="" v-if="icon.value.toLowerCase() === 'settings'">.{{ value }}</li>-->
<!--          </ul>-->
<!--        </span>-->
        <ListWrapper :list="icons" @menu="selectedIcon">
          <template v-slot="{menu}">
            <ul :class="['border-t-2 mt-1 pl-1', showList ? 'scale-down' : '']" v-if="showList">
              <li v-for="(value, index) in menu" :key="index" class="" v-if="value.value.toLowerCase() === 'settings'">.{{ value }}</li>
            </ul>
          </template>
        </ListWrapper>
      </section>
      <div class="flex gap-x-3 items-center cursor-pointer text-sky-300 absolute bottom-[200px]" @click="$emit('close')">
        Close:  <ArrowRight class="hover:translate-x-4 duration-500"/>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import {currentUser} from "../store/loginStore";
import Person from "../assets/holidays-foto/Person.vue";
import ArrowRight from "../assets/holidays-foto/ArrowRight.vue";
import Contact from "../assets/icons/Contact.vue";
import Settings from "../assets/icons/Settings.vue";
import Email from "../assets/icons/Email.vue";
import Documentation from "../assets/icons/Documentation.vue";
import {icons} from "../utils/icon";
import {ref} from "vue";
import ListWrapper from "./ListWrapper.vue";

defineEmits(["close"]);
const showList = ref<boolean>(false);

const list = [
  {
    label: "a",
    key: "contact",
  },
  {
    label: "b",
    key: "settings",
  },
  {
    label: "c",
    key: "documentation",
  }
]

const selectedIcon = (icon: string): void => {

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