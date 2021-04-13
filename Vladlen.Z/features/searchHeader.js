describe('search for item categories header: desktop', function() {


  beforeEach(function () {
    cy.viewport(1920, 1080)
    cy.fixture('baseUrl').then(function (baseUrl) {
        this.baseUrl = baseUrl
    })
  })

    it('is looking for pizza as valid option', function() {
        cy.visit(this.baseUrl.baseUrlDeliveryEN)
        cy.url({timeout:10000})
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
        cy.get('.Search__info-text-item___17UrV', {timeout:10000})
          .should('be.visible') 
        cy.get('#SearchInputAnimated-input-id').type('{enter}')
        cy.url()
          .should('include', 'search?q=nails') 
        cy.get('#SearchInputAnimated-input-id')
          .should('have.value', 'nails')
        cy.get('.RestaurantsNotFound__title___32Ni1 > span', {timeout:10000})
          .should('be.visible') 
        cy.get('.RestaurantsNotFound__text___hjDDm > span')
          .should('be.visible')
        //ExpRes: correct page is loaded; User is informed about absence of the item looked for
  })
})

describe('search for item categories header: mobile', function() {

  beforeEach(function () {
    cy.viewport(360, 640)
    cy.fixture('baseUrl').then(function (baseUrl) {
        this.baseUrl = baseUrl
    })
  })
    it('is looking for pizza as valid option mobile', function() {
        cy.visit(this.baseUrl.baseUrlDeliveryEN)
        cy.url({timeout:10000})
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
        cy.get('.Search__info-text-item___17UrV', {timeout:10000})
          .should('be.visible') 
        cy.get('#SearchInputAnimated-input-id').type('{enter}')
        cy.url()
          .should('include', 'search?q=nails') 
        cy.get('#SearchInputAnimated-input-id')
          .should('have.value', 'nails')
        cy.get('.RestaurantsNotFound__title___32Ni1 > span', {timeout:10000})
          .should('be.visible')
        cy.get('.RestaurantsNotFound__text___hjDDm > span')
          .should('be.visible')
        //ExpRes: correct page is loaded; User is informed about absence of the item looked for
  })
})