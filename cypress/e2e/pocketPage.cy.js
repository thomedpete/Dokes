describe('visiting the Pocket page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept(`https://icanhazdadjoke.com/`,
        {
          "id": "R7UfaahVfFd",
          "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
          "status": 200
        }
      )
    cy.get(`.save-joke-button`).click()
    cy.get(`.new-joke-button`).click()
    cy.intercept(`https://icanhazdadjoke.com/`,
        {
          "id": "R7UfaahVfFd",
          "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
          "status": 200
        }
      )
    cy.get(`.save-joke-button`).click()
    cy.get(`.new-joke-button`).click()
    cy.intercept(`https://icanhazdadjoke.com/`,
        {
          "id": "R7UfaahVfFd",
          "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
          "status": 200
        }
      )
    cy.get(`.save-joke-button`).click()
    cy.visit('http://localhost:3000/pocket')
  })
 
  // Unsure if this test is needed, but maybe with page change?
  it('should see the title of the page', () => {
    cy.get('.dokes').contains('dokes')
  });

  it('should see an empty gallery', () => { // change to w/e whoopsie content
    cy.get('.grid')
    .should('not.exist')
    // currently has 3 cards loaded until delete tests added
    // add .contains for that content
  })

})