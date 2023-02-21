import { ref } from "vue";

export const isLogin = ref(false);
export const FORM_DATA = "form";

export type User = {
    password: string;
    confirmPassword?: string;
    email: string;
    firstname?: string,
    lastname?: string,
    age?: number;
    sex?: string;
}
export const  currentUser = ref<User>({
    password: "",
    email: "",
    lastname: "",
    firstname: ""
})
export let allUsers:User[] = [];
