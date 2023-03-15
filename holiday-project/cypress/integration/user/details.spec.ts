import {useCypressCommands} from "../../utils/common";
import {FIELDS_TO_EXTRACT} from "../../../src/utils/enum";

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

    });
})