/// <reference types="cypress" />

import {useCypressCommands} from "../../utils/common";
import {FIELDS_TO_EXTRACT} from "../../../src/utils/enum";

const { login, loginInterception, holidayList, userDetails } = useCypressCommands();

describe("Holiday list", () => {
    beforeEach(() => {
        userDetails();
        loginInterception();
        login("sontiahermann3@gmail.com", "Kher@mann123");
        cy.get("[data-test='login-button']").click();
        cy.wait("@connect-user");
        cy.wait("@user-details");
    });

    it("should have list completely displayed", () => {
        holidayList();
        cy.get("[data-test='list-holiday']").click();
        cy.wait("@holiday-list");
    });

    it("should display an empty list when no holiday is available", () => {
        cy.intercept({
            method: "GET",
            url: `/holiday/holidays?fieldsToExtractCode=${FIELDS_TO_EXTRACT.CODE_2}`
        },
            {
                statusCode: 200,
                body: []
            }).as("empty-holiday-list");
        cy.get("[data-test='list-holiday']").click();
        cy.wait("@empty-holiday-list");
    });
})