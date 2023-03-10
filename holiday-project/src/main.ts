import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "./router";
import {prepareApis} from "./utils/backend-api";

prepareApis();

createApp(App).use(router).use(createPinia()).mount("#app");
