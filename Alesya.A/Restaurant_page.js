context('Restaurant page', () => {

   beforeEach(() => {
      cy.viewport(1366, 768)
      cy.visit('https://wolt.com/en/ltu/kaunas/restaurant/mamma-pizza-vytauto-pr').wait(5000)
      cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click()
   })

   it('Restaurant information method 1', () => {
   cy.get('.VenueStickyHeader__center___2P9bk').should('exist').click()
   cy.get('.VenueSide__content___35ENR').should('be.visible')
   cy.get('.VenueSide__content___35ENR > :nth-child(2)').should('be.visible')
   cy.contains('Vytauto pr. 37').should('be.visible')
   cy.get('.RestaurantDeliveryAreaMap__map___3H2eg').scrollIntoView().should('be.visible')
   cy.get('.VenueSide__content___35ENR > :nth-child(5)').scrollIntoView().should('be.visible')
   cy.contains('+37061015590').should('exist')
   cy.contains('http://www.mammapizza.lt/').should('exist')
   })

 it('Restaurant information method 2', () => {
   cy.get('.VenueSideInfo__venueInformation___31X6t').scrollIntoView().should('be.visible')
   cy.get('[data-localization-key="venue-info.more-information"]').should('exist').click()
   cy.get('.VenueSide__content___35ENR').should('be.visible')
   cy.get('.VenueSide__content___35ENR > :nth-child(2)').should('be.visible')
   cy.contains('Vytauto pr. 37').should('be.visible')
   cy.get('.RestaurantDeliveryAreaMap__map___3H2eg').scrollIntoView().should('be.visible')
   cy.get('.VenueSide__content___35ENR > :nth-child(5)').scrollIntoView().should('be.visible')
   cy.contains('+37061015590').should('exist')
   cy.contains('http://www.mammapizza.lt/').should('exist')

   })

})