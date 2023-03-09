import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "./router";
import { createPinia } from "pinia";

const defaultLanguage = (): string => {
    const result = navigator.language.split("-")[0];
    if (result !== "fr") {
        return "en";
    }
    return result;
};

const locale = defaultLanguage();

createApp(App).use(router).use(createPinia()).mount("#app");
