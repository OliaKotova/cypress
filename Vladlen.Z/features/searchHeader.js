describe('search for item categories', function() {

  beforeEach(() => {
    cy.viewport(1366,768)
  })

    it('is looking for pizza as valid option', function() {
        cy.visit('https://wolt.com/en/delivers-to-me')
        cy.url({timeout:5000})
          .should('include', 'en/delivers-to-me')
        cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click() //cookies acception
        cy.get('[data-test-id="SearchInput"]')
          .type('pizza')
          .should('have.value','pizza') //valid search query
        cy.get('[data-localization-key="search.show-results"]', {timeout:5000}).click()
        cy.url()
          .should('include', 'search?q=pizza')
        cy.get('[data-test-id="SearchInput"]')
          .should('have.value', 'pizza')
        //ExpRes: correct page is loaded
    })

    it('restaurant query', function() {
      cy.get('#SearchInputAnimated-input-id').click()
        .clear()
        .type('cili pizza', { delay: 100 })
      cy.get('.ToolTipBase__content___3AC4h')
        .should('be.visible')
      cy.get('[class="Search__name___uq0of"]', {timeout:5000})
        .should('have.length', 2)
        .and('be.visible')
        .and('contain.text', 'Čili pizza')
      cy.get('[data-localization-key="search.show-results"]')
        .should('be.visible')
        .and('contain.text', 'Show all')
      cy.get('#SearchInputAnimated-input-id').type('{Enter}')
      cy.url()
        .should('include', 'en/search?q=cili%20pizza')
      cy.get('[class="ListPage__title___2qZT8"]')
        .should('contain.text', 'cili pizza')
  })

    it('is looking for nails as invalid option', function() {
        cy.get('#SearchInputAnimated-input-id').click()
          .clear()
          .type('nails')
          .should('have.value', 'nails') //invalid search query
        cy.get('.Search__info-text-item___17UrV', {timeout:5000})
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