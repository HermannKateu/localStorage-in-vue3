import Contact from "../assets/icons/Contact.vue";
import Settings from "../assets/icons/Settings.vue";
import Documentation from "../assets/icons/Documentation.vue";
import Email from "../assets/icons/Email.vue";

export type Menu = {
    icon?: unknown;
    value: string;
    list: string[];
}
export const icons: Menu[] = [
    {
        icon: Contact,
        value: "Contact",
        list: ["a", "b"]
    },
    {
        icon: Settings,
        value: "Settings",
        list: ["c","d"]
    },
    {
        icon: Documentation,
        value: "Documentation",
        list: ["e", "f"]
    },
    {
        icon: Email,
        value: "Email",
        list: ["g", "h"]
    },
]