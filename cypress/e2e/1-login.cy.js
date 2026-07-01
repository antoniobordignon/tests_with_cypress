const { users, login, captureTestScreenshot } = require('../support/saucedemo');

describe('SauceDemo - Login', () => {
  it('CT-01 Login com credenciais validas', () => {
    login(users.valid, users.password);
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
    captureTestScreenshot();
  });

  it('CT-02 Login sem usuario', () => {
    login(undefined, users.password);
    cy.get('[data-test="error"]').should('contain', 'Username is required');
    captureTestScreenshot();
  });

  it('CT-03 Login sem senha', () => {
    login(users.valid, undefined);
    cy.get('[data-test="error"]').should('contain', 'Password is required');
    captureTestScreenshot();
  });

  it('CT-04 Login com credenciais invalidas', () => {
    login(users.invalid, 'wrong_password');
    cy.get('[data-test="error"]').should(
      'contain',
      'Username and password do not match any user in this service'
    );
    captureTestScreenshot();
  });

  it('CT-05 Login com usuario bloqueado', () => {
    login(users.locked, users.password);
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out');
    captureTestScreenshot();
  });
});
