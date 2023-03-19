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
        },

        async getHolidayById(id: number): Promise<Holiday>{
            let holiday: HolidayDTO = {};
            try {
                holiday = await HolidayService.getHolidayById({
                    id,
                });
            }catch (error) {
                console.log(error)
            }
            return new Holiday(holiday);
        },

        async createHoliday(holiday: Holiday): Promise<void>{
            try {
                 await HolidayService.createHoliday({
                    requestBody: {
                        numberOfDays: holiday.numberOfDays,
                        startingDate: holiday.startingDate,
                        endingDate: holiday.endingDate,
                        returnDate: holiday.returnDate,
                        description: holiday.description,
                        type: holiday.type,
                        createdAt: holiday.creationDate
                    },
                });
            }catch (error) {
                console.log(error)
            }
        },

        async createdelteHoliday(id: number): Promise<void>{
            try {
                 await HolidayService.deleteHoliday({
                    id,
                 });
            }catch (error) {
                console.log(error)
            }
        }
    }
})