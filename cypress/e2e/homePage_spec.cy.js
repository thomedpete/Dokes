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

  it.skip('Should fetch from  correct api url', () => {
    cy.intercept(`dadjokeAPIurl`, {
      jokes:
      {
        average_rating: 4,
        backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        id: 436270,
        poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        release_date: "2022-10-19",
        title: "Black Adam"
      },
    })
  });


})