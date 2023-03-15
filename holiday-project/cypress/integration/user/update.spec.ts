import {useCypressCommands} from "../../utils/common";

const { login, loginInterception, userDetails } = useCypressCommands();

describe("User Update", () => {
    beforeEach(() => {
        userDetails();
        loginInterception();
        login("sontiahermann3@gmail.com", "Kher@mann123");
        cy.get("[data-test='login-button']").click();
        cy.wait("@connect-user");
    });

    it("should successfully update the user if the new data are corrects", () => {
        cy.intercept({
            method: "PUT",
            url: "uum/users/2"
        },
            {
                statusCode: 204
            }).as("update-user");
        cy.get("[data-test='user-initials']").click();
        cy.get("[data-test='user-update']").click();

        fillUserForm("sundiatakeit@gnail.com", "1234qwer7@")
        cy.get("[data-test='update-user']").click();
        cy.wait("@update-user")
    });
    const fillUserForm = (email: string, password: string): void => {
        cy.get("[data-test='email-input-update']").click().clear().type(email)
        cy.get("[data-test='password-input-update']").click().clear().type(password)
    }
});
