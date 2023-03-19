import {defineStore} from "pinia";
import {User} from "../domain/user";
import { AuthService } from "../services/authentication";
import {useErrorStore} from "./error";
import {ERROR} from "../utils/enum";
import {useSessionStore} from "./session";

export const useAuthenticationStore = defineStore({
    id: "authentication",
    actions: {
        async createUser(user: User): Promise<string>{
            let userId: string = ""
            try {
                userId = await AuthService.createUser({
                    requestBody: {
                        email: user.email,
                        password: user.password,
                        lastName: user.lastName,
                        firstName: user.firstName,
                        gender: user.gender
                    }
                })
            }catch (error) {
                // @ts-ignore
                switch (error.body) {
                    case "P2002": {
                        useErrorStore().error.email = ERROR.P2002;
                        break;
                    }
                }
            }
            return userId;
        },

        async connectUser(user: User): Promise<string>{
            useSessionStore().isLoading = true;
            let userId: string = "";
            try {
                userId = await AuthService.connectUser({
                    requestBody: {
                        email: user.email,
                        password: user.password,
                    }
                })
            }catch (error) {
                // @ts-ignore
                switch (error.body) {
                    case "P2005": {
                        useErrorStore().error.email = ERROR.P2005;
                        break;
                    }
                    case "P2006": {
                        useErrorStore().error.password = ERROR.P2006;
                        break;
                    }
                }
            }
            console.log(userId)
            return userId;
        }
    }
})