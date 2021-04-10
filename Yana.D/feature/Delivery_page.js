describe('Searching', () => {
    it('Add valid address in delivery page', () => {
        cy.viewport(1280, 800)
        cy.visit('https://wolt.com/en/delivers-to-me')

        //close cookie
        cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
        .click()

        cy.get('.Button__button___1o5LE > span')
        .click()
        cy.get('div[data-test-id="small-modal"]')
        .should('be.visible')

        //enter name of street
        cy.get('input#address')
        .type('Geležinkelio g. 19{enter}')
        .should('be.visible')
        cy.get(':nth-child(4) > .AddressPickerInput__result___1Ex5g')
        .click()
    })
    it('Add invalid address in delivery page', () => {
        cy.viewport(1280, 800)
        cy.visit('https://wolt.com/en/delivers-to-me')
        
        //close cookie
        cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
        .click()

        cy.get('.Button__button___1o5LE > span')
        .click()
        cy.get('div[data-test-id="small-modal"]')
        .should('be.visible')

        //enter name of street
        cy.get('input#address')
        .type('dgfgd{enter}')
        .should('be.visible')
        cy.get('.AddressPickerInput__result___1Ex5g span')
        .should('have.attr', 'data-localization-key', 'user.no-geocoding-results')

    })    
})