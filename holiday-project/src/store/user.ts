import { defineStore } from "pinia";
import {User} from "../domain/user";
import {UserDTO, UserService} from "../services/user";
import { useSessionStore } from "./session";

export const useUserStore = defineStore({
  id: "user",
  actions: {
    async getUser(): Promise<User>{
      let user:UserDTO = {}
      try {
        user = await UserService.getUser()
      }catch (error) {
        console.log(error)
      }
      return  new User(user);
    },

    async updateUser(user: User): Promise<void> {
      try {
        useSessionStore().isLoading = true;
        await UserService.updateUser({
          id: user.id,
          requestBody: {
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            password:  user.password
          }
        })
      }catch (error) {
        console.log(error)
      }
      useSessionStore().isLoading = false;
    },
  }
});
