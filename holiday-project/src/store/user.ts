import { defineStore } from "pinia";
import {User} from "../domain/user";
import {UserDTO, UserService} from "../services/user";
import {FIELDS_TO_EXTRACT} from "../utils/enum";
import {useSessionStore} from "./session";

export const useUserStore = defineStore({
  id: "user",
  actions: {
    async getUser(): Promise<User>{
      useSessionStore().isLoading = true;
      let user:UserDTO = {}
      try {
        user = await UserService.getUser({fieldsToExtractCode: FIELDS_TO_EXTRACT.CODE_1})
      }catch (error) {
        console.log(error)
      }
      useSessionStore().isLoading = false;
      return  new User(user);
    },

    async updateUser(user: User): Promise<void> {
      try {
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
    },
  }
});
