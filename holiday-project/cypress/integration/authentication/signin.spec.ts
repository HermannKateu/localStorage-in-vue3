/// <reference types="cypress" />

import {useCypressCommands} from "../../utils/common";

const { login, interceptLoginError, loginInterception } = useCypressCommands();

describe("Sign in", () => {
    beforeEach(() => {
        login("sontiahermann3@gmail.com", "Kher@mann123");
    });

    it("should be successful when the user informations are corrects", () => {
        loginInterception();
        cy.get("[data-test='login-button']").click();
        cy.wait("@connect-user")
    });

    it("should fail when the user does not exist in the data base", () => {
       interceptLoginError("/authentication/auth/signin", "P2005");
        login("sontiahermann3@gmail.com", "Kher@mann123");
        cy.get("[data-test='login-button']").click();
        cy.wait("@invalid-user");
    })
});