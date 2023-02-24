<template>
  <div v-for="(icon, index) in list" :key="index"
       class="p-1.5 bg-sky-100 rounded flex flex-col justify-center cursor-pointer hover:translate-x-5  duration-500"
       @click="sendEvent(icon.value)"
  >
    <span class="flex space-x-3">
      <component :is="icon.icon" class="w-[25px] h-[25px]"/> <span>{{icon.value}}</span>
    </span>
    <slot :menu="icon"/>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {Menu} from "../utils/icon";

const emit = defineEmits(["menu"]);

const sendEvent = (name: string): void => {
  emit("menu", name);
}
defineProps({
  list: {
    type: Array as PropType<Menu[]>,
    default: {},
  },
})
</script>