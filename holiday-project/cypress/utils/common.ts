/// <reference types="cypress" />
import {FIELDS_TO_EXTRACT} from "../../src/utils/enum";

export function useCypressCommands() {
    const login = (email: string, password: string): void => {
        cy.visit("/");
        cy.get("[data-test='email-input']").type(email);
        cy.get("[data-test='password-input-1']").type(password);
    }
    const interceptLoginError = (path: string, body: string): void => {
        cy.intercept({
                method: "POST",
                url: path,
            },
            {
                statusCode: 403,
                body: body
            }
        ).as("invalid-user");
    }

    const loginInterception = (): void => {
        cy.intercept({
            method: "POST",
            url: "/auth/signin"
        }, {
            statusCode: 201,
        }).as("connect-user")
    };

    const userDetails = (): void => {
        cy.intercept({
            method: "GET",
            url: `/users/user?fieldsToExtractCode=${FIELDS_TO_EXTRACT.CODE_1}`
        },
            {
                statusCode: 200,
                body: {
                    id: 2,
                    firstName: "Hermann",
                    lastName: "Sontia",
                    gender: "Male",
                    email: "sontiahermann3@gmail.com",
                    password: "Kher@mann123"
                }
            }
            ).as("user-details")
    };

    const holidayList = (): void => {
        cy.intercept({
            method: "GET",
            url: `/holidays?fieldsToExtractCode=${FIELDS_TO_EXTRACT.CODE_2}`
        },
        {
            statusCode: 200,
            body: [
                {
                    id: 0,
                    startingDate: "2022/11/12",
                    endingDate: "2023/10/1",
                    returnDate: "2023/10/2",
                    creationDate: "2023/9/12",
                    numberOfDays: 120,
                    description: "The description of the first holiday",
                    type: "Annual"
                },
                {
                    id: 1,
                    startingDate: "2023/3/1",
                    endingDate: "2023/5/1",
                    returnDate: "2023/5/2",
                    creationDate: "2023/9/12",
                    numberOfDays: 120,
                    description: "The description of the first holiday",
                    type: "Annaul"
                },
                {
                    id: 2,
                    startingDate: "2022/11/12",
                    endingDate: "2023/10/1",
                    returnDate: "2023/10/2",
                    creationDate: "2023/9/12",
                    numberOfDays: 120,
                    description: "The description of the first holiday",
                    type: "Annaul"
                },
                {
                    id: 3,
                    startingDate: "2022/11/12",
                    endingDate: "2023/10/1",
                    returnDate: "2023/10/2",
                    creationDate: "2023/9/12",
                    numberOfDays: 120,
                    description: "The description of the first holiday",
                    type: "Annaul"
                },
                {
                    id: 4,
                    startingDate: "2022/11/12",
                    endingDate: "2023/10/1",
                    returnDate: "2023/10/2",
                    creationDate: "2023/9/12",
                    numberOfDays: 120,
                    description: "The description of the first holiday",
                    type: "Annaul"
                },
                {
                    id: 5,
                    startingDate: "2022/11/12",
                    endingDate: "2023/10/1",
                    returnDate: "2023/10/2",
                    creationDate: "2023/9/12",
                    numberOfDays: 120,
                    description: "The description of the first holiday",
                    type: "Annaul"
                },
                {
                    id: 6,
                    startingDate: "2022/11/12",
                    endingDate: "2023/10/1",
                    returnDate: "2023/10/2",
                    creationDate: "2023/9/12",
                    numberOfDays: 120,
                    description: "The description of the first holiday",
                    type: "Annaul"
                },
                {
                    id: 7,
                    startingDate: "2022/11/12",
                    endingDate: "2023/10/1",
                    returnDate: "2023/10/2",
                    creationDate: "2023/9/12",
                    numberOfDays: 120,
                    description: "The description of the first holiday",
                    type: "Annaul"
                },
            ]
        }).as("holiday-list")
    };

    return{
        login,
        interceptLoginError,
        loginInterception,
        userDetails,
        holidayList
    }
}