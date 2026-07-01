const { users, login, captureTestScreenshot } = require('../support/saucedemo');

describe('SauceDemo - Catalogo e produto', () => {
  beforeEach(() => {
    login(users.valid, users.password);
  });

  it('CT-06 Exibicao do catalogo', () => {
    cy.get('.inventory_item').should('have.length.at.least', 1);
    captureTestScreenshot();
  });

  it('CT-07 Ordenacao por nome crescente', () => {
    cy.get('[data-test="product-sort-container"]').select('Name (A to Z)');
    cy.get('.inventory_item_name').then(($items) => {
      const names = [...$items].map((el) => el.innerText.trim());
      const sorted = [...names].sort((a, b) => a.localeCompare(b));
      expect(names).to.deep.equal(sorted);
    });
    captureTestScreenshot();
  });

  it('CT-08 Ordenacao por menor preco', () => {
    cy.get('[data-test="product-sort-container"]').select('Price (low to high)');
    cy.get('.inventory_item_price').then(($items) => {
      const prices = [...$items].map((el) => Number(el.innerText.replace('$', '')));
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sorted);
    });
    captureTestScreenshot();
  });

  it('CT-09 Acesso aos detalhes de produto', () => {
    cy.get('.inventory_item_name').first().click();
    cy.get('.inventory_details_name').should('be.visible');
    cy.get('.inventory_details_price').should('be.visible');
    captureTestScreenshot();
  });
});
