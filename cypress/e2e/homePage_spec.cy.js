describe('onLoad', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should see the title of the page', () => {
    cy.get('.page-title')
  });

  it('Should see the title of the page', () => {
    cy.get('.header')
  });

  it('Should see a amusing heroBanner displayed ', () => {
    cy.get('.joke-card')
  });

  it('Should see a random joke displayed ', () => {
    cy.get('.hero-banner')
  });

  it.skip('', () => {
  });


})