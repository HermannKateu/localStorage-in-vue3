/// <reference types="cypress" />
describe("Sign up", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("[data-test='sign-up-button']").click();
    });

    it("should be successful when the user informations are corrects", () => {
        cy.intercept(
            {
                url: "/authentication/auth/signup",
                method: "POST"
            },
            {
                statusCode: 201,
            }
        ).as("created-user");

        fillUserForm({
            email: "sontia@gmail.com",
            password: "1234qwerty",
            passConfirmation: "1234qwerty",
            firstname: "Sontia",
            lastname: "Hermann",
            gender: "Male"
        });

        cy.get("[data-test='submit-button']").click();
        cy.wait("@created-user");
    });

    it("should fail when the user already exist", () => {
        cy.intercept({
            method: "POST",
            url: "/authentication/auth/signup",
            },
            {
                statusCode: 403,
                body: "P2002"
            }
        ).as("invalid-user");

        fillUserForm({
            email: "sontia@gmail.com",
            password: "1234qwerty",
            passConfirmation: "1234qwerty",
            firstname: "Sontia",
            lastname: "Hermann",
            gender: "Male"
        });

        cy.get("[data-test='submit-button']").click();
        cy.get("[data-test='sign-up-error']").should("have.text", "It seems as if a user already have this email. If you are the one please Login")
    });

    type User = {
        email?: string;
        password?: string;
        passConfirmation?: string;
        firstname?: string;
        lastname?: string;
        gender?: string;
    };

    const fillUserForm = (user: User): void => {
        cy.get("[data-test='email-input']").type(user.email)
        cy.get("[data-test='password-input-1']").type(user.password)
        if (user.passConfirmation) cy.get("[data-test='password-confirmation-input']").type(user.passConfirmation)
        cy.get("[data-test='user-firstname']").type(user.firstname)
        cy.get("[data-test='user-lastname']").type(user.lastname)
        cy.get("[data-test='male']").check(user.gender)
    }
})