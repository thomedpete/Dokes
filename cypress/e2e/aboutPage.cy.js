describe('Visiting the About Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/about')
    })

    it('user should see the title of the page they are on', () => {
        cy.get('.aboutUs-title').contains('About Dokes')
    })

    it('user should see about us text on the page', () => {
        cy.get('.about-dokes').contains(`Welcome to our dad joke application, DOKES! We are a team of three software developers who are passionate about bringing joy and laughter to people's lives through the power of dad jokes. Our goal is to create a platform that not only delivers a never-ending supply of terrible jokes, but also (planned future extensions) allows users to contribute their own jokes and vote on their favorites. Whether you're a fan of classic groaners or you have a knack for crafting your own terrible puns, there's something for everyone in our dad joke application. So come on in and join the fun!`)
    })

    it('user should see information about the developers', () => {
        cy.get('.about-us').contains(`T.I.M. is the dev team of T - Thomas Peterson, I - Ian McIntosh and M - Matt Walter. Feel free to explore our Github (first name) and LinkedIn (last name) via these links!`)
    })

    it('user should be able to click on links for more information about developers', () => {
        cy.get('#thomas').should('exist')
        cy.get('#peterson').should('exist')
        cy.get('#ian').should('exist')
        cy.get('#mcintosh').should('exist')
        cy.get('#matt').should('exist')
        cy.get('#walter').should('exist')
    })

})