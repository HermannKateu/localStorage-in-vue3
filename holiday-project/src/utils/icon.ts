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
        value: "user.value_1",
        list: ["list.1", "list.2"]
    },
    {
        icon: Settings,
        value: "user.value_2",
        list: ["list_2.1","list_2.2"]
    },
    {
        icon: Documentation,
        value: "user.value_3",
        list: [
            "list_3.1",
            "list_3.2",
            "list_3.3",
        ]
    },
    {
        icon: Email,
        value: "user.value_4",
        list: ["list_4.1"]
    },
]