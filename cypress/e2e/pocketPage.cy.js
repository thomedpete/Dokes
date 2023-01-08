describe('visiting the Pocket Page', () => {
  beforeEach(() => {
    cy.intercept(`https://icanhazdadjoke.com/`,
      {
        statusCode: 200, 
        ok: true,
        fixture: 'joke1'
    })
  })

  it('should see an empty gallery', () => { // change to w/e whoopsie content
    cy.visit('http://localhost:3000/pocket')
    cy.get('.aboutUs-container').contains('You don\'t have any jokes in your pocket yet... SAVE SOME!')
  })

  it('should be able to save and delete a joke', () => {
    cy.visit('http://localhost:3000').get('.save-joke-button').click()
    cy.get(`#long-button`).click().get('#Pocket > .little-link').click()
    cy.url().should('eq', 'http://localhost:3000/pocket')
    cy.get('.MuiPaper-root > .MuiTypography-root').contains('What do you call a magician who lost his magic? Ian.')
    cy.get('.MuiPaper-root > .MuiButtonBase-root').click()
    cy.get('.aboutUs-container').contains('You don\'t have any jokes in your pocket yet... SAVE SOME!')
  })

  it('should be able to return home via the Whoopsie content Link', () => {
    cy.visit('http://localhost:3000/pocket')
    cy.get('.about-us > .MuiTypography-root').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

})
