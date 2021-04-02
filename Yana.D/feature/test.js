describe('Searching', function() {
    it('Search cuisine in search form', function(){
        cy.viewport(1280, 800)
        cy.fixture('cypressWolt').then(data => {

            //navigate to the "Discovery" page
            cy.visit(data.name_url)
            cy.get('.SearchInputAnimated__root___3qG8u')
            .type('pizza')
            .click()

            //click on "Search all restaurants" button
            cy.get('.Search__info-text-item___17UrV')
            .should('be.visible')
            .click()
            
            //cy.get('.VenueBanner__root___12DIt::after').scrollTo('bottom')
        })
        
    })
})