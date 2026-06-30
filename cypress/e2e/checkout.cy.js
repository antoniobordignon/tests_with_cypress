const { users, login, addItemByName, captureTestScreenshot } = require('../support/saucedemo');

describe('SauceDemo - Checkout', () => {
  beforeEach(() => {
    login(users.valid, users.password);
    addItemByName('Sauce Labs Backpack');
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
  });

  it('CT-14 Checkout sem primeiro nome', () => {
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain', 'First Name is required');
    captureTestScreenshot();
  });

  it('CT-15 Checkout sem sobrenome', () => {
    cy.get('[data-test="firstName"]').type('Ana');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain', 'Last Name is required');
    captureTestScreenshot();
  });

  it('CT-16 Checkout sem CEP', () => {
    cy.get('[data-test="firstName"]').type('Ana');
    cy.get('[data-test="lastName"]').type('Silva');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain', 'Postal Code is required');
    captureTestScreenshot();
  });

  it('CT-17 Finalizacao de compra', () => {
    cy.get('[data-test="firstName"]').type('Ana');
    cy.get('[data-test="lastName"]').type('Silva');
    cy.get('[data-test="postalCode"]').type('01000-000');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
    captureTestScreenshot();
  });
});
