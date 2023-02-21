import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "./router";
import createI18n from "vue-i18n";
import i18nMessages from "../src/i18n.json";

const defaultLanguage = (): string => {
    const result = navigator.language.split("-")[0];
    if (result !== "fr") {
        return "en";
    }
    return result;
};

const locale = defaultLanguage();

createApp(App).use(router).mount("#app");
