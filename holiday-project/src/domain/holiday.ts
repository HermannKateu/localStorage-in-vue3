import {HolidayDTO} from "../services/holiday";

export class Holiday {
    isNull = true;
    constructor(private holiday: HolidayDTO) {
        this.isNull = false;
    };

    get id(): number {
        return this.holiday.id ? this.holiday.id : 0
    }

    get startingDate(): string {
        return this.holiday.startingDate ? this.holiday.startingDate : ""
    }

    get endingDate(): string {
        return this.holiday.endingDate ? this.holiday.endingDate : ""
    }

    get returnDate(): string {
        return this.holiday.returnDate ? this.holiday.returnDate : ""
    }

    get numberOfDays(): number {
        return this.holiday.numberOfDays ? this.holiday.numberOfDays : 0;
    }

    get description(): string {
        return this.holiday.description ? this.holiday.description : "";
    }

    get creationDate(): string {
        return this.holiday.createdAt ? this.holiday.createdAt : "";
    }

    get type(): string {
        return this.holiday.type ? this.holiday.type : "";
    }
}

export const newNullHoliday = (): Holiday => {
    const holiday:Holiday  = new Holiday({});
    holiday.isNull = true;
    return holiday;
}