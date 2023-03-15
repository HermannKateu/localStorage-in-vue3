import { defineStore } from "pinia";
import {User} from "../domain/user";
import {UserDTO, UserService} from "../services/user";
import {FIELDS_TO_EXTRACT} from "../utils/enum";

export const useUserStore = defineStore({
  id: "user",
  actions: {
    async getUser(): Promise<User>{
      let user:UserDTO = {}
      try {
        user = await UserService.getUser({fieldsToExtractCode: FIELDS_TO_EXTRACT.CODE_1})
      }catch (error) {
        console.log(error)
      }
      return  new User(user);
    }
  }
});
