<template>
  <div v-for="(menu, index) in list" :key="index"
       class="p-2 bg-sky-100 rounded flex flex-col justify-center cursor-pointer hover:translate-x-4  duration-500"
       @click="sendEvent(menu.value?.toLowerCase())"
  >
    <span class="flex space-x-3">
      <component :is="menu.icon" class="w-[25px] h-[25px]"/> <span>{{ t(menu.value)}}</span>
    </span>
    <slot :menu="menu"/>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {Menu} from "../utils/icon";
import {useI18n} from "vue-i18n";

const emit = defineEmits(["menu"]);

const { t } = useI18n({
  useScope: "global",
  inheritLocale: true,
});
const sendEvent = (name: string): void => {
  emit("menu", name);
}
defineProps({
  list: {
    type: Array as PropType<Menu[]>,
    default: () => [],
  },
})
</script>