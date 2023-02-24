import Contact from "../assets/icons/Contact.vue";
import Settings from "../assets/icons/Settings.vue";
import Documentation from "../assets/icons/Documentation.vue";
import Email from "../assets/icons/Email.vue";
import {currentUser} from "../store/loginStore";

window.addEventListener("load", () => {
   currentUser.value = JSON.parse(localStorage.getItem("user") as string);
});


export type Menu = {
    icon?: unknown;
    value: string;
    list: string[];
}
export const icons: Menu[] = [
    {
        icon: Contact,
        value: "Contact",
        list: ["My MTN number 672549898", "My Orange number 659597785"]
    },
    {
        icon: Settings,
        value: "Settings",
        list: ["Update your account","Delete your account"]
    },
    {
        icon: Documentation,
        value: "Documentation",
        list: [
            "This site allows you to create some holidays",
            "Enables you to see their details",
            "Delete them if you want",
        ]
    },
    {
        icon: Email,
        value: "Email",
        list: [`Your mail is ${currentUser.value.email}`, "Creator email sontiahermann3@gmail.com"]
    },
]