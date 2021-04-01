describe('search for item categories', function() {
    it('is looking for pizza as valid option', function() {
        cy.viewport(1366, 768)
        cy.visit('https://wolt.com/en/delivers-to-me')
        cy.wait(4000)
        cy.url()
          .should('include', 'en/delivers-to-me')
        cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click() //cookies acception
        cy.get('[data-test-id="SearchInput"]')
          .type('pizza')
          .should('have.value','pizza') //valid search query
        cy.wait(4000)
        cy.get('[data-localization-key="search.show-results"]').click()
        cy.url()
          .should('include', 'search?q=pizza')
        cy.get('[data-test-id="SearchInput"]')
          .should('have.value', 'pizza')
        //ExpRes: correct page is loaded
    })

    it('is looking for nails as invalid option', function() {
        cy.viewport(1366, 768)
        cy.get('#SearchInputAnimated-input-id').click()
          .clear()
          .type('nails')
          .should('have.value', 'nails') //invalid search query
        cy.wait(4000)
        cy.get('.Search__info-text-item___17UrV')
          .should('have.text', 'Nothing came up with that search 😕') 
        cy.get('#SearchInputAnimated-input-id').type('{enter}')
        cy.url()
          .should('include', 'search?q=nails') 
        cy.get('#SearchInputAnimated-input-id')
          .should('have.value', 'nails')
        cy.get('.RestaurantsNotFound__title___32Ni1 > span')
          .should('have.text', 'Nothing came up for "nails"') 
        cy.get('.RestaurantsNotFound__text___hjDDm > span')
          .should('have.text', 'Please try searching for something else instead')
        //ExpRes: correct page is loaded; User is informed about absence of the item looked for
  })

})