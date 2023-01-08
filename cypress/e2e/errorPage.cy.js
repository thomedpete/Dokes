describe('Visiting the About Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/4654684dfghdfy')
  })

  it('user should see an error page when they go to the wrong url', () => {
    cy.get('.App > :nth-child(2)').should('exist')
  })

  it('User should be able to navigate home using the home button', () => {
    cy.get('a > button').click()
    cy.url().should('eq','http://localhost:3000/')
  })
  

}) 