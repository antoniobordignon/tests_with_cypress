const users = {
  valid: 'standard_user',
  locked: 'locked_out_user',
  invalid: 'invalid_user',
  password: 'secret_sauce',
};

const login = (username, password) => {
  cy.visit('/', {
    blockHosts: ['fonts.googleapis.com', 'fonts.gstatic.com'],
  });
  cy.get('#user-name').clear();
  cy.get('#password').clear();
  if (username !== undefined) cy.get('#user-name').type(username);
  if (password !== undefined) cy.get('#password').type(password);
  cy.get('#login-button').click();
};

const addItemByName = (name) => {
  cy.contains('.inventory_item', name).find('button').click();
};

const removeItemByName = (name) => {
  cy.contains('.inventory_item', name).find('button').click();
};

const captureTestScreenshot = () => {
  const titlePath = Cypress.currentTest.titlePath.join(' -- ');
  cy.screenshot(titlePath, { capture: 'runner' });
};

module.exports = {
  users,
  login,
  addItemByName,
  removeItemByName,
  captureTestScreenshot,
};
