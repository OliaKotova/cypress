describe('My First Test', () => {
    it(' adding to order ', () => {
      cy.visit('https://wolt.com/en/discovery')
      cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
      .click()
      cy.get('[href="/en/delivers-to-me"]')
      .click()

      //add an address
      cy.get('.Button__button___1o5LE > span')
      .click()
      cy.get('#address')
      .type('Ozo g. 25, Vilnius, Lithuania')
      cy.get('.AddressPickerInput__root___upjJ8 > .Button__button___1o5LE')
      .click()
      .wait(5000)
      cy.get(':nth-child(1) > .AddressPickerInput__result___1Ex5g')
      .click()
    })
  })
  