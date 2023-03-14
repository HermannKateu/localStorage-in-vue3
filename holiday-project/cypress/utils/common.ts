/// <reference types="cypress" />
export function useCypressCommands() {
    const login = (email: string, password: string): void => {
        cy.get("[data-test='email-input']").type(email)
        cy.get("[data-test='password-input-1']").type(password)
    }

    return{
        login,
    }
}