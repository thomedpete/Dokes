describe('Visiting the About Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/4654684dfghdfy')
  })

  it('user should see an error page when they go to the wrong url', () => {
    cy.get('.aboutUs-title').contains('About Dokes')
  })
  

})