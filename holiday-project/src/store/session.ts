import {defineStore} from "pinia";

type State = {
    isLoading: boolean;
}
export const useSessionStore = defineStore({
    id: "session",
    state: (): State => ({
        isLoading: false
    })
})