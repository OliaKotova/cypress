describe('language selection', function() {

  beforeEach(() => {
    cy.viewport(1366,768)
  })

    it('selects Russian as restaurant page language', function() {
        cy.visit ('https://wolt.com/en/ltu/vilnius/restaurant/cili-pizza-big')
        cy.wait(3000)
        cy.url()
          .should('include', 'restaurant/cili-pizza-big')
        cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE').click()
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span').scrollIntoView()
          .click()
          cy.get('.Select__arrowDown___tdHIs').click()
          cy.get('[id="react-select-2--option-4"]').click()
          cy.get('[data-localization-key="menu.translate-show-original-prompt"]').scrollIntoView()
            .should('include.text','from Lithuanian to Russian')
    })

    it('selects original restaurant page language', function() {
        cy.wait(3000)
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span').click()
        cy.wait(3000)
        cy.get('[data-localization-key="menu.translate-prompt"]').scrollIntoView()
          .should('include.text', 'This menu is in Lithuanian')
    })

    it('selects English as restaurant page language', function() {
        cy.wait(3000)
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span').scrollIntoView()
          .click()
        cy.get('.Select__arrowDown___tdHIs').click()
        cy.get('[id="react-select-3--option-3"]').click()
        cy.get('[data-localization-key="menu.translate-show-original-prompt"]').scrollIntoView()
          .should('include.text','from Lithuanian to English')
    })
})
