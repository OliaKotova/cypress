context('Creating an order', () => {

   beforeEach(() => {
      cy.viewport(1366, 768)
      cy.visit('https://wolt.com/en/ltu/kaunas/restaurant/mamma-pizza-vytauto-pr').wait(5000)
      cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click()
              
   })

   it('Adding a dish to an order', () => {
      cy.get('.Categories__root___3h645').should('be.visible').wait(2000)
      cy.contains('Mamma suktinukai').scrollIntoView().click()
      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .MenuItem__itemContainer___1ylSL > .MenuItem__toggle___jBcIm > :nth-child(1) > .MenuItem__contentBorderContainer___3Os_h > .MenuItem__contentArea___Lj3rK > .MenuItem__content___BHqdW > .MenuItem__name___2bEqM').click()
      cy.get('[data-localization-key="menu.add-to-order"]').click().wait(2000)
      cy.get('[class="Categories__root___3h645 rtl"]').wait(2000)
      cy.get('[class="Categories__button___2PxO7"]').contains('Gėrimai').click()
      cy.get('[data-test-id="MenuItemContentArea"]').scrollIntoView().contains('Fanta 0,25 l').click()
      cy.get('[class="QuantityControls__optionCounter___3SsdH"]')
      cy.get('[data-test-id="Containers.Buttons.CheckoutButton"] > .CheckoutButton__loginButton___CN6Za').click()
   })
})