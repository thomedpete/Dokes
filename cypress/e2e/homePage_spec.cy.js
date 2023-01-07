describe('onLoad', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should see the title of the page', () => {
    cy.get('.dokes').contains('dokes')
  });

  it('Should see a random joke', () => {
    cy.intercept(`https://icanhazdadjoke.com/`,
      {
        id: 'i31LeNRuzAd',
        joke: 'Why did the chicken get a penalty? For fowl play.',
        status: 200
      },
    )
    cy.get('.jokes').contains('Why did the chicken get a penalty? For fowl play.')
  });

  it('Should be able to click on the header menu', () => {
    cy.get(`#long-button`).click().get('#Pocket').click().visit('http://localhost:3000/pocket')
  });

  it('Should be able to click the about option and got to about page', () => {
    cy.get(`#long-button`).click().get('#About').click().visit('http://localhost:3000/about')
  });

  it('Should be able to click the home option and go to Home page', () => {
    cy.visit('http://localhost:3000/about')
    cy.get(`#long-button`).click().get('#Home').click().visit('http://localhost:3000')
  });

  it('Should be able to navigate with browser arrows', () => {
    cy.get(`#long-button`).click().get('#About').click().visit('http://localhost:3000/about').go('back').go('forward')
  });

  it('Should be able to click new joke button and see a new joke', () => {
    cy.get('.new-joke-button').click()
      .intercept(`https://icanhazdadjoke.com/`,
        {
          "id": "R7UfaahVfFd",
          "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
          "status": 200
        }
      )
    cy.get('.jokes').contains("My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.")
  });



})