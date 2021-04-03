describe('delivery address management', function() {

  beforeEach(() => {
    cy.viewport(1366,768)
  })

    it('sets valid reachable delivery address', function() {
        cy.visit('https://wolt.com/en/delivers-to-me')
        cy.wait(4000)
        cy.url()
          .should('include', 'en/delivers-to-me')
        cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click() //cookies acception
        cy.get('[data-localization-key="delivery.no-address-link"]').click()
        cy.get('[id="address"]')
          .type('s neries g93') //'casual' input spelling is likely to change into correct one later
          .should('have.value', 's neries g93')
        cy.get ('[data-localization-key="front-view.fetch-address"]').click()
        cy.wait(3000)
        cy.get ('[class="AddressPickerInput__result___1Ex5g"]')
        cy.contains ('S. Nėries g. 93').click()
        cy.wait(3000)
        cy.url()
          .should('include', 'en/delivers-to-me')
        cy.get ('[data-test-id="Buttons.UserLocation"]').scrollIntoView()
          .should('have.text', 'S. Nėries gatvė 93')
        //ExpRes: valid address is set, address spelling is 'correct'         
    })

    it('changes to valid unreachable delivery address', function() {
        cy.get ('[data-test-id="Buttons.UserLocation"]').click()
        cy.get('#address').click()
          .clear()
          .type('ул. Белинского 48')
        cy.get('.AddressPickerInput__root___upjJ8 > .Button__button___1o5LE').click()
        cy.get(':nth-child(1) > .AddressPickerInput__result___1Ex5g') //checking correctness of suggested alternatives till 40th line 
          .should('include.text', 'ул. Белинского')
        cy.get(':nth-child(5) > .AddressPickerInput__result___1Ex5g')
          .should('include.text', 'ул. Белинского')
        cy.get(':nth-child(3) > .AddressPickerInput__result___1Ex5g')
          .should('include.text', 'ул. Белинского')
        cy.get(':nth-child(4) > .AddressPickerInput__result___1Ex5g')
          .should('include.text', 'ул. Белинского')
        cy.get(':nth-child(2) > .AddressPickerInput__result___1Ex5g')
          .should('include.text', 'ул. Белинского')
        cy.get('.AddressPickerInput__root___upjJ8 > .Button__button___1o5LE').click()
        cy.get(':nth-child(2) > .AddressPickerInput__result___1Ex5g')
          .click({waitForAnimations:false}) //option's selected
        cy.url()
          .should('include', 'en/delivers-to-me')
        cy.get ('[data-test-id="Buttons.UserLocation"]').scrollIntoView()
          .should('have.text', 'vulica Bialinskaha 48')      
        cy.get('.OutOfReach__title___JcUWi')
          .should('be.visible')
          .should('have.text', 'Sorry! There aren’t any places on Wolt near you – yet! 😕')
        //expected outcome: unreachable address is set; informing message is visible  
    })

    it('changes to invalid delivery address', function() {
        cy.get ('[data-test-id="Buttons.UserLocation"]').click()
        cy.get('#address').click()
          .clear()
          .type('<&invAlid@@ADDRеSS?{}>')
        cy.get('.AddressPickerInput__root___upjJ8 > .Button__button___1o5LE').click()
        cy.get('#address').type('{enter}')
        cy.get('.AddressPickerInput__result___1Ex5g')
          .should('be.visible')
          .should('have.text', 'No results')
        //ExpRes: invalid address can't be set 
    })

})