import { defineStore } from "pinia";
import {Holiday} from "../domain/holiday";
import {type HolidayDTO, HolidayService} from "../services/holiday";
import {FIELDS_TO_EXTRACT} from "../utils/enum";

export const useHolidayStore = defineStore({
    id: "holiday",
    actions: {
        async getAllHolidays(): Promise<Holiday[]>{
            let holidays: HolidayDTO[] = [];
            try {
                holidays = await HolidayService.getAllHolidays({
                    fieldsToExtractCode: FIELDS_TO_EXTRACT.CODE_2
                });
            }catch (error) {
                console.log(error)
            }
            return holidays.map(holiday => new Holiday(holiday));
        }
    }
})