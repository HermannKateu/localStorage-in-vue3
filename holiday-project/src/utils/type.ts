export type KeyWord = {
    value: string;
    key: string;
}

export type HolidayInfo = {
    starting: string;
    type: KeyWord;
    ending: string;
    numberOfDays?: string;
    creationDate?: string;
    returnDate?: string;
    description?: string;
}

export type Error = {
    password: string;
    email: string;
}
