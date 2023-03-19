import { defineStore } from "pinia";
import {Holiday} from "../domain/holiday";
import {type HolidayDTO, HolidayService} from "../services/holiday";

export const useHolidayStore = defineStore({
    id: "holiday",
    actions: {
        async getAllHolidays(): Promise<Holiday[]>{
            let holidays: HolidayDTO[] = [];
            try {
                holidays = await HolidayService.getAllHolidays();
            }catch (error) {
                console.log(error)
            }
            return holidays.map(holiday => new Holiday(holiday));
        }
    }
})