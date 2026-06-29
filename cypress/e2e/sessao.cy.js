const { users, login } = require('../support/saucedemo');

describe('SauceDemo - Sessao', () => {
  it('CT-18 Logout', () => {
    login(users.valid, users.password);
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
    cy.get('#login-button').should('be.visible');
  });
});
