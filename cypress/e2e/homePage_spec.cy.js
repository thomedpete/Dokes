describe('onLoad', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should see the title of the page', () => {
    cy.get('.dokes').contains('dokes');
  });

  it('Should see a random joke', () => {
    cy.intercept(`https://icanhazdadjoke.com/`,
      {
        id: 'i31LeNRuzAd',
        joke: 'Why did the chicken get a penalty? For fowl play.',
        status: 200
      }
    );
    cy.get('.jokes').contains('Why did the chicken get a penalty? For fowl play.');
  });

  it('Should be able to click the about option and got to pocket page', () => {
    cy.get(`#long-button`).click().get('#Pocket > .little-link').click();
  });

  it('Should be able to click the about option and got to about page', () => {
    cy.get(`#long-button`).click().get('#About > .little-link').click();
  });

  it('Should be able to click the home option and go to Home page', () => {
    cy.visit('http://localhost:3000/about');
    cy.get(`#long-button`).click().get('#Home > .little-link').click();
  });

  it('Should be able to navigate with browser arrows', () => {
    cy.get(`#long-button`).click().get('#About > .little-link').click()
    .url().should('eq', 'http://localhost:3000/about').go('back')
    .url().should('eq', 'http://localhost:3000/').go('forward')
    .url().should('eq', 'http://localhost:3000/about').go('back');
  });

  it('Should be able to click new joke button and see a new joke', () => {
    cy.get('.new-joke-button').click()
      .intercept(`https://icanhazdadjoke.com/`,
        {
          "id": "R7UfaahVfFd",
          "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
          "status": 200
        }
      );
    cy.get('.jokes').contains("My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.");
  });

  it('should be able to navigate to the project repo via the footer link "Dokes"', () => {
    cy.visit('http://localhost:3000');
    cy.get('.MuiTypography-body2 > .MuiTypography-root').should('exist')
  });

})