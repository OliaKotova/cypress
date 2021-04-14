describe('Add order', () => {
    it('Visiting kfc', () => {

      cy.viewport(1240, 800)
      cy.visit('https://wolt.com/en/ltu/vilnius/restaurant/kfc')

      cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
      .click()

      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .MenuItem__itemContainer___1ylSL > .MenuItem__toggle___jBcIm > :nth-child(1) > .MenuItem__contentBorderContainer___3Os_h > .MenuItem__contentArea___Lj3rK')
      .scrollIntoView()
      .should('be.visible')
      .click()
      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .MenuItem__itemContainer___1ylSL > .MenuItem__toggle___jBcIm > :nth-child(1) > .MenuItem__contentBorderContainer___3Os_h > .MenuItem__contentArea___Lj3rK > .MenuItem__left___27tG1 > div > .MenuItem__plusIcon___2W1-t > .PlusButton__plusButton___6rZ3r > svg')
      .click()
    })
})
