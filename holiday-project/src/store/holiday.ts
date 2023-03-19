import { defineStore } from "pinia";
import {Holiday} from "../domain/holiday";
import {type HolidayDTO, HolidayService} from "../services/holiday";
import { useSessionStore } from "./session";

export const useHolidayStore = defineStore({
    id: "holiday",
    actions: {
        async getAllHolidays(): Promise<Holiday[]>{
            useSessionStore().isLoading = true;
            let holidays: HolidayDTO[] = [];
            try {
                holidays = await HolidayService.getAllHolidays();
            }catch (error) {
                console.log(error)
            }
            useSessionStore().isLoading = false;
            return holidays.map(holiday => new Holiday(holiday));
        },

        async getHolidayById(id: number): Promise<Holiday>{
            useSessionStore().isLoading = true;
            let holiday: HolidayDTO = {};
            try {
                holiday = await HolidayService.getHolidayById({
                    id,
                });
            }catch (error) {
                console.log(error)
            }
            useSessionStore().isLoading = false;
            return new Holiday(holiday);
        },

        async createHoliday(holiday: Holiday): Promise<void>{
            try {
            useSessionStore().isLoading = true;
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
            useSessionStore().isLoading = false;
        },

        async deleteHoliday(id: number): Promise<void>{
            useSessionStore().isLoading = true;
            try {
                 await HolidayService.deleteHoliday({
                    id,
                 });
            }catch (error) {
                console.log(error)
            }
            useSessionStore().isLoading = false;
        }
    }
})