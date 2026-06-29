const { users, login, addItemByName, removeItemByName } = require('../support/saucedemo');

describe('SauceDemo - Carrinho', () => {
  beforeEach(() => {
    login(users.valid, users.password);
  });

  it('CT-10 Adicao de produto ao carrinho', () => {
    addItemByName('Sauce Labs Backpack');
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  it('CT-11 Remocao pelo catalogo', () => {
    addItemByName('Sauce Labs Backpack');
    removeItemByName('Sauce Labs Backpack');
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('button')
      .should('have.text', 'Add to cart');
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('CT-12 Visualizacao do carrinho', () => {
    addItemByName('Sauce Labs Backpack');
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 1);
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
    cy.get('.inventory_item_price').should('contain', '$29.99');
  });

  it('CT-13 Remocao pela tela do carrinho', () => {
    addItemByName('Sauce Labs Backpack');
    cy.get('.shopping_cart_link').click();
    cy.contains('button', 'Remove').click();
    cy.get('.cart_item').should('have.length', 0);
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
