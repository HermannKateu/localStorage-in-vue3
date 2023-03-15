import { defineStore } from "pinia";
import {Holiday} from "../domain/holiday";
import {type HolidayDTO, HolidayService} from "../services/holiday";
import {FIELDS_TO_EXTRACT} from "../utils/enum";
import {useSessionStore} from "./session";

export const useHolidayStore = defineStore({
    id: "holiday",
    actions: {
        async getAllHolidays(): Promise<Holiday[]>{
            useSessionStore().isLoading = true;
            let holidays: HolidayDTO[] = [];
            try {
                holidays = await HolidayService.getAllHolidays({
                    fieldsToExtractCode: FIELDS_TO_EXTRACT.CODE_2
                });
            }catch (error) {
                console.log(error)
            }
            useSessionStore().isLoading = false;
            return holidays.map(holiday => new Holiday(holiday));
        }
    }
})