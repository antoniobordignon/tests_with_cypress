const users = {
  valid: 'standard_user',
  locked: 'locked_out_user',
  invalid: 'invalid_user',
  password: 'secret_sauce',
};

const login = (username, password) => {
  cy.visit('/');
  if (username !== undefined) cy.get('#user-name').clear().type(username);
  if (password !== undefined) cy.get('#password').clear().type(password);
  cy.get('#login-button').click();
};

const addItemByName = (name) => {
  cy.contains('.inventory_item', name).find('button').click();
};

const removeItemByName = (name) => {
  cy.contains('.inventory_item', name).find('button').click();
};

module.exports = {
  users,
  login,
  addItemByName,
  removeItemByName,
};
