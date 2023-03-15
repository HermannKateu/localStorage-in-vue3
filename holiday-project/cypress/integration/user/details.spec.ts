import {useCypressCommands} from "../../utils/common";

const { login, loginInterception, userDetails } = useCypressCommands();

describe("User details", () => {
    beforeEach(() => {
        userDetails();
        loginInterception();
        login("sontiahermann3@gmail.com", "Kher@mann123");
        cy.get("[data-test='login-button']").click();
        cy.wait("@connect-user");
    })
    it("should be successful when the user exists", () => {
        cy.get("[data-test='user-initials']").click();
        cy.get("[data-test='user-details']").click();
        cy.wait("@user-details")

        cy.get("[data-test='user-name']").should("have.text", "HERMANN SONTIA")
        cy.get("[data-test='user-gender']").should("have.text", " Male")
    });
});