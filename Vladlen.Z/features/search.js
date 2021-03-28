describe('search for item categories', function() {
    it('is looking for pizza', function() {
        cy.viewport(1366, 768) //2nd in statistics
        cy.visit('https://wolt.com/en/delivers-to-me')
        cy.wait(4000) //every 'wait': waiting for interface to load
        cy.url()
          .should('include', 'en/delivers-to-me')
        cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click() //cookies acception
        cy.get('[data-test-id="SearchInput"]')
          .type('pizza')
          .should('have.value','pizza') //valid search query
        cy.wait(4000)
        cy.get('[data-localization-key="search.show-results"]').click()
        cy.url()
          .should('include', 'search?q=pizza') //expected outcome: correct page loaded
        cy.get('[data-test-id="SearchInput"]')
          .should('have.value', 'pizza') //input data isn't removed
    })

    it('is looking for kebab', function() {
        cy.viewport(1920, 1080) //the most common resolution
        cy.get('#SearchInputAnimated-input-id').click()
          .clear()
          .type('kebab')
          .should('have.value', 'kebab') //valid search query
        cy.wait(4000)  
        cy.get('.Search__info-text-item___17UrV > span').click()
        cy.url()
          .should('include', 'search?q=kebab') //expected outcome: correct page loaded
        cy.get('#SearchInputAnimated-input-id')
          .should('have.value', 'kebab') //input data isn't removed
  })

    it('is looking for nails', function() {
        cy.viewport(1536, 864) //3rd in statistics
        cy.get('#SearchInputAnimated-input-id').click()
          .clear()
          .type('nails')
          .should('have.value', 'nails') //invalid search query
        cy.wait(4000)
        cy.get('.Search__info-text-item___17UrV')
          .should('have.text', 'Nothing came up with that search 😕') // expected outcome: the drop-down message
        cy.get('#SearchInputAnimated-input-id').type('{enter}') // hit 'enter'
        cy.url()
          .should('include', 'search?q=nails') //correct page loaded
        cy.get('#SearchInputAnimated-input-id')
          .should('have.value', 'nails')
        cy.get('.RestaurantsNotFound__title___32Ni1 > span')
          .should('have.text', 'Nothing came up for "nails"') // expected outcome: the message on the page
        cy.get('.RestaurantsNotFound__text___hjDDm > span')
          .should('have.text', 'Please try searching for something else instead') // expected outcome: the message on the page
  })

})