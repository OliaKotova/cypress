const baseUrl = require('C:/Users/cypress.env.json')

describe('search for item categories header: desktop', function() {


  beforeEach(() => {
    cy.viewport(1920, 1080)
  })

    it('is looking for pizza as valid option', function() {
        cy.visit(baseUrl + 'en/delivers-to-me/')
        cy.url({timeout:5000})
          .should('include', 'en/delivers-to-me')
        cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click() //cookies acception
        cy.get('[data-test-id="SearchInput"]')
          .type('pizza')
          .should('have.value','pizza') //valid search query
        cy.get('[data-localization-key="search.show-results"]', {timeout:10000}).click()
        cy.url()
          .should('include', 'search?q=pizza')
        cy.get('[data-test-id="SearchInput"]')
          .should('have.value', 'pizza')
        //ExpRes: correct page is loaded
    })

    it('is looking for nails as invalid option', function() {
        cy.get('#SearchInputAnimated-input-id').click()
          .clear()
          .type('nails')
          .should('have.value', 'nails') //invalid search query
        cy.get('.Search__info-text-item___17UrV', {timeout:7000})
          .should('be.visible') 
        cy.get('#SearchInputAnimated-input-id').type('{enter}')
        cy.url()
          .should('include', 'search?q=nails') 
        cy.get('#SearchInputAnimated-input-id')
          .should('have.value', 'nails')
        cy.get('.RestaurantsNotFound__title___32Ni1 > span')
          .should('be.visible') 
        cy.get('.RestaurantsNotFound__text___hjDDm > span')
          .should('be.visible')
        //ExpRes: correct page is loaded; User is informed about absence of the item looked for
  })
})

describe('search for item categories header: mobile', function() {

  beforeEach(() => {
    cy.viewport(360, 640)
  })

    it('is looking for pizza as valid option mobile', function() {
        cy.visit(baseUrl + 'en/delivers-to-me/')
        cy.url({timeout:5000})
          .should('include', 'en/delivers-to-me')
        cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click() //cookies acception
        cy.get('[data-test-id="SearchInput"]')
          .type('pizza')
          .should('have.value','pizza') //valid search query
        cy.get('[data-localization-key="search.show-results"]', {timeout:10000}).click()
        cy.url()
          .should('include', 'search?q=pizza')
        cy.get('[data-test-id="SearchInput"]')
          .should('have.value', 'pizza')
    })

    it('is looking for nails as invalid option: mobile', function() {
        cy.get('#SearchInputAnimated-input-id').click()
          .clear()
          .type('nails')
          .should('have.value', 'nails') //invalid search query
        cy.get('.Search__info-text-item___17UrV', {timeout:7000})
          .should('be.visible') 
        cy.get('#SearchInputAnimated-input-id').type('{enter}')
        cy.url()
          .should('include', 'search?q=nails') 
        cy.get('#SearchInputAnimated-input-id')
          .should('have.value', 'nails')
        cy.get('.RestaurantsNotFound__title___32Ni1 > span')
          .should('be.visible')
        cy.get('.RestaurantsNotFound__text___hjDDm > span')
          .should('be.visible')
        //ExpRes: correct page is loaded; User is informed about absence of the item looked for
  })
})