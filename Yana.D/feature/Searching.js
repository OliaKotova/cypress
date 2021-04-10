describe('Searching', function() {
    it('Search cuisine in search form', function(){
        cy.viewport(1280, 800)
        cy.fixture('cypressWolt').then(data => {

            //navigate to the "Discovery" page
            cy.visit(data.name_url)
            cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
            .click()
            cy.get('.SearchInputAnimated__root___3qG8u')
            .type('pizza')
            .click()
            cy.get('#SearchInputAnimated-input-id')
            .should('have.value', 'pizza')

            //click on "Search all restaurants" button
            cy.get('.Search__info-text-item___17UrV')
            .click()
            cy.contains('Pizza Room')
            .scrollIntoView()
            .click()
            cy.get('.VenueHeroBanner__title___ITJnJ')
            .should('have.text', 'Pizza Room')
            cy.get('.VenueSideInfo__venueInfoButton___1QW5E > span')
            .click()
            cy.get('.RestaurantDeliveryAreaMap__map___3H2eg')
            .should('be.visible')
        })
        
    })

    it('Search for restaurants nearby', function(){
        cy.viewport(1280, 800)

        //navigate to the "main" page
        cy.visit('https://wolt.com/en/')

        //close cookie
        cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
        .click()

        //enter name of street
        cy.get('#front-page-input')
        .type('Geležinkelio g. 19{enter}')
        .should('be.visible')

        //choose a street from the suggestion
        cy.get(':nth-child(4) > .FrontPageLocationSelector__locationResultContainer___3M_Py > span')
        .should('have.text', 'Geležinkelio g. 19, Vilnius, Lithuania')
        .click()        
        cy.get('.SubNavigation__item___1kQfm span[data-localization-key="nav.delivers-to"]')
        .click()
        .should('be.visible')
                 
    }) 
    it('Search invalid category of cuisine', function(){
        cy.viewport(1280, 800)

        //navigate to the "main" page
        cy.visit('https://wolt.com/en/discovery')

        //close cookie
        cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
        .click()

        //navigate to the "Discovery" page
        cy.get('.SearchInputAnimated__root___3qG8u')
        .type('зубочистка{enter}')
        .click()
        cy.get('#SearchInputAnimated-input-id')
        .should('have.value', 'зубочистка')
        cy.get('.RestaurantsNotFound__title___32Ni1 > span')
        .should('have.text', 'Nothing came up for "зубочистка"')
    })
}) 