const baseUrl = require('C:/Users/cypress.env.json')

describe('delivery address management: desktop', function() {

  beforeEach(() => {
    cy.viewport(1920,1080)
  })

    it('sets valid reachable delivery address: desktop', function() {
        cy.visit(baseUrl + 'en/delivers-to-me/')
        cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]', {timeout:5000}).click() //cookies acception
        cy.get('[data-localization-key="delivery.no-address-link"]').click()
        cy.get('[id="address"]')
          .type('s neries g93') //'casual' input spelling is likely to change into correct one later
          .should('have.value', 's neries g93')
        cy.get ('[data-localization-key="front-view.fetch-address"]').click()
        cy.get ('[class="AddressPickerInput__result___1Ex5g"]', {timeout:5000})
        cy.contains ('S. Nėries g. 93', {timeout:7000})
           .click()
        cy.url({timeout:5000})
          .should('include', 'en/delivers-to-me')
        cy.get ('[data-test-id="Buttons.UserLocation"]').scrollIntoView()
          .should('have.text', 'S. Nėries gatvė 93')
        //ExpRes: valid address is set, address spelling is 'correct'         
    })

    it('changes to valid unreachable delivery address: desktop', function() {
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

    it('changes to invalid delivery address: desktop', function() {
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

describe('delivery address management: mobile', function() {

  beforeEach(() => {
    cy.viewport(360, 640)
  })

    it('sets valid reachable delivery address: mobile', function() {
        cy.visit(baseUrl +'en/delivers-to-me/')
        cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]', {timeout:5000}).click() //cookies acception
        cy.get('[data-localization-key="delivery.no-address-link"]').click()
        cy.get('[id="address"]')
          .type('s neries g93') //'casual' input spelling is likely to change into correct one later
          .should('have.value', 's neries g93')
        cy.get ('[data-localization-key="front-view.fetch-address"]').click()
        cy.get ('[class="AddressPickerInput__result___1Ex5g"]', {timeout:5000})
        cy.contains ('S. Nėries g. 93', {timeout:7000})
           .click()
        cy.url({timeout:5000})
          .should('include', 'en/delivers-to-me')
        cy.get ('[data-test-id="Buttons.UserLocation"]').scrollIntoView()
          .should('have.text', 'S. Nėries gatvė 93')
        //ExpRes: valid address is set, address spelling is 'correct'         
    })

    it('changes to valid unreachable delivery address: mobile', function() {
        cy.get ('[class="UserLocation__mobileContainer___JNfkg"]').click()
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

    it('changes to invalid delivery address: mobile', function() {
        cy.get ('[class="UserLocation__mobileContainer___JNfkg"]').click()
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