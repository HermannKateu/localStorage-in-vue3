import {defineStore} from "pinia";

type State = {
    error: {
        password: string,
        user: string
    }
}
export const useErrorStore = defineStore({
    id: "error",
    state: () => <State>({
        error: {}
    })
})