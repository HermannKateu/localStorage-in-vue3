import {defineStore} from "pinia";
import {User} from "../domain/user";
import { AuthService } from "../services/authentication";
import {useErrorStore} from "./error";
import {ERROR} from "../utils/enum";

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
            let userId: string = ""
            try {
                userId = await AuthService.connectUser({
                    requestBody: {
                        email: user.email,
                        password: user.password,
                    }
                })
            }catch (error) {
                switch (error.body) {
                    case "P2005": {
                        useErrorStore().error.password = ERROR.P2002;
                        break;
                    }
                }
            }
            return userId;
        }
    }
})