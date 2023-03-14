/// <reference types="cypress" />

import {useCypressCommands} from "../../utils/common";

const { login } = useCypressCommands();

describe("Sign in", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should be successful when the user informations are corrects", () => {
        cy.intercept({
            method: "POST",
            url: "/authentication/auth/signin"
        }, {
            statusCode: 201,
        }).as("connect-user")
        login("sontiahermann3@gmail.com", "Kher@mann123");
        cy.get("[data-test='login-button']").click();
        cy.wait("@connect-user")
    });
});