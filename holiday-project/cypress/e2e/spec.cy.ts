import { eq, iteratee } from "cypress/types/lodash";

describe('HolidayPage', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("should sign-up the user to the home page", {keystrokeDelay: 50}, () => {
    it("if the user's account do not yet exist", () => {
      cy.get("[data-test-id='sign-up-button']").click();
      cy.url("eq", "http://localhost:3000/sign-up");
      cy.get("[data-test='email-unput']").type("sontiakateu3@gmail.com");
      cy.get("[data-test-id='input-password']").type("123");
      cy.get("[data-test='age-input']").type("19");
      cy.get("#male").check();
      cy.get("[data-test='submit-button']").click();
      cy.wait(1000);
    });
  });

  describe('should display an error message if the account already exist', {keystrokeDelay: 50}, () => {
    it("and should ask user to login", () => {
      cy.get("[data-test-id='sign-up-button']").click();
      cy.setItem("form",JSON.stringify({email:"sontiakateu3@gmail.com", age:19, password:"123", sex:"Male"}))
      cy.get("[data-test='email-unput']").type("sontiakateu3@gmail.com");
      cy.get("[data-test-id='input-password']").type("123");
      cy.get("[data-test='age-input']").type("19");
      cy.get("#male").check();
      cy.get("[data-test='submit-button']").click();
      cy.get("[data-test='sign-up-error']").should("be.visible");
    });
  });

  describe("should not sign-in the user", {keystrokeDelay: 50}, () => {
    it("when the password input is not filled and display and error message on login", {keystrokeDelay: 50}, () => {
      cy.get("[data-test-id='email']").type("sontiakateu3@gmail.com");
      cy.get("button").click();
      cy.get("[data-test='password-error-msg']").should("be.visible");
    });

    it("when the email input isn't filled", () => {
      cy.get("[data-test-id='password']").type("123456789");
      cy.get("button").click();
      cy.get("[data-test='email-error-msg']").should("be.visible");
    });

    it("when the user do not enters any filled", () => {
      cy.get("button").click();
      cy.get("[data-test='password-error-msg']").should("be.visible");
      cy.get("[data-test='email-error-msg']").should("be.visible");
    });

    it("when the email is valid but have and incorrect password", () => {
      cy.setItem("form",JSON.stringify({email:"sontiakateu3@gmail.com", age:19, password:"123", sex:"Male"}))
      cy.get("[data-test-id='email']").type("sontiakateu3@gmail.com");
      cy.get("[data-test-id='password']").type("123456789");
      cy.get("button").click();
      cy.get("[data-test='login-error-msg']").should("be.visible");
    });

    it("when the password is valid but have an invalid email", () => {
      cy.setItem("form",JSON.stringify({email:"sontiakateu3@gmail.com", age:19, password:"123", sex:"Male"}))
      cy.get("[data-test-id='email']").type("sontiakateu@gmail.com");
      cy.get("[data-test-id='password']").type("123");
      cy.get("button").click();
      cy.get("[data-test='login-error-msg']").should("be.visible");
    });
  });

  describe("log-in the user", {keystrokeDelay: 50}, () => {
    describe("if the email and password are correct ", () => {
      it("and display the contact in the header", () => {
        cy.setItem("form",JSON.stringify({email:"sontiakateu3@gmail.com", age:19, password:"123", sex:"Male"}))
        cy.get("[data-test-id='email']").type("sontiakateu3@gmail.com");
        cy.get("[data-test-id='password']").type("123");
        cy.get("button").click();
        cy.url("eq", "http://localhost:3000/home");
        cy.get("[data-test='title']").should("have.text", " Hello, welcome to.... ");
        cy.get("[data-test='contact']").should("be.visible");
        cy.get("[data-test='contact']").should("have.length", 2);
      })
    });

    describe("HomePage", () => {
      beforeEach(() => {
        cy.visit("http://localhost:3000/home");
      });

      describe("enters in the holidays page", () => {
        it("and click on the holiday holiday card", () => {
          cy.viewport(400, 750);
          cy.wait(3000)
          cy.get("[data-test='list-holiday']").click();
          cy.get("[data-test='holiday-card']").should("have.length", 6);
          cy.get("[data-test='holiday-card']").eq(0).click();
          cy.url("eq", "http://localhost:3000/holiday-item/0");
        });

        it("and does to the holiday form", () => {
          cy.get("[data-test='create-holiday']").click();
          cy.get("[data-test='select-holiday']").select("Martenite").should("have.value", "Martenite");
          cy.get("[data-test='starting-date']").type("2022-06-17");
          cy.get("[data-test='ending-date']").type("2022-06-17");
          cy.get("[data-test='return-date']").type("2022-06-17");
          cy.get("[data-test='describe']").type("Thanks for visiting our site and see you naschte mal......")
        });
      });
    });
  });

})