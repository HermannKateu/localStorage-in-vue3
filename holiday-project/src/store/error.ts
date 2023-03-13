import {defineStore} from "pinia";

type State = {
    error: {
        password: string,
        email: string
    }
}
export const useErrorStore = defineStore({
    id: "error",
    state: () => <State>({
        error: {}
    })
})