import {defineStore} from "pinia";
import {User} from "../domain/user";
import { AuthService } from "../services/authentication";
import {useErrorStore} from "./error";

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
                switch (error) {
                    case "P2002": {
                        useErrorStore().error.user = "This user already exists. If you are the one please sign up";
                        break;
                    }
                    case "P2005": {
                        useErrorStore().error.password = "The password is incorrect";
                        break;
                    }
                }
            }
            return userId;
        }
    }
})