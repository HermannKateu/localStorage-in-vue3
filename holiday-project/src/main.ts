import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "./router";
import {prepareApis} from "./utils/backend-api";
import {createI18n} from "vue-i18n";
import i18nMessages from "./i18n.json";


prepareApis();

const defaultLanguage = (): string => {
    const result = navigator.language.split("-")[0];
    if (result !== "fr") {
        return "en";
    }
    return result;
};
const locale = defaultLanguage();

const i18n = createI18n({
    locale,
    legacy: false,
    fallbackLocale: "en",
    messages: i18nMessages,
});

createApp(App).use(i18n).use(router).use(createPinia()).mount("#app");
