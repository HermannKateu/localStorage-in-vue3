export type KeyWord = {
    value: string;
    key: string;
}

export type HolidayInfo = {
    starting: string;
    type: KeyWord;
    ending: string;
    numberOfDays?: "";
    returnDate?: string;
    description?: string;
}
