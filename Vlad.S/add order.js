describe('Login', () => {
    it('Visiting Discovery.Quest', () => {
      cy.visit('https://wolt.com/en/ltu/vilnius/restaurant/kfc')
      cy.wait(5000)
      cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
      .click()
      cy.get('.Categories__listItem___2q8Is').should('be.visible')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .MenuItem__itemContainer___1ylSL > .MenuItem__toggle___jBcIm > :nth-child(1) > .MenuItem__contentBorderContainer___3Os_h > .MenuItem__contentArea___Lj3rK')
      .click()
      cy.get(':nth-child(1) > .Button__button___1o5LE')
      .click()
    })
})
