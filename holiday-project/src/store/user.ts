import {defineStore} from "pinia";
import {User} from "../domain/user";
import {UserService} from "../services/user";
import {AuthService} from "../services/authentication";

export const useUserStore = defineStore({
    id: "user",
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
                console.log(error)
            }
            return userId;
        }
    }
})