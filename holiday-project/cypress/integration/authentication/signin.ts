/// <reference types="cypress" />
describe("Sign in", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should be successful when the user informations are corrects", () => {
        fillUserForm({
            email: "sontiakateu123",
            password: "1234qwerty"
        })
    });

    type User = {
        email?: string;
        password?: string;
    };

    const fillUserForm = (user: User): void => {
        cy.get("[data-test='email-input']").type(user.email)
        cy.get("[data-test='password-input-1']").type(user.password)
    }
});