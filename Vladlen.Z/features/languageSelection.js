const baseUrl = require('C:/Users/HP/cypress/fixtures/cypress.env.json')

describe('restaurant page: language selection, desktop', function() {

  beforeEach(() => {
    cy.viewport(1920, 1080)
  })

    it('selects Russian as restaurant page language, desktop', function() {
        cy.visit (baseUrl + 'en/ltu/vilnius/restaurant/cili-pizza-big')
        cy.url({timeout:7000})
          .should('include', 'restaurant/cili-pizza-big')
        cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE').click()
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span').scrollIntoView()
          .click()
          cy.get('.Select__arrowDown___tdHIs').click()
          cy.get('[id="react-select-2--option-4"]').click()
          cy.get('[data-localization-key="menu.translate-show-original-prompt"]', {timeout:7000}).scrollIntoView()
            .should('include.text','from Lithuanian to Russian')
    })

    it('selects original restaurant page language, desktop', function() {
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span', {timeout:7000})
          .click()
        cy.get('[data-localization-key="menu.translate-prompt"]', {timeout:7000})
          .scrollIntoView()
          .should('include.text', 'This menu is in Lithuanian')
    })

    it('selects English as restaurant page language, desktop', function() {
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span', {timeout:7000})
          .scrollIntoView()
          .click()
        cy.get('.Select__arrowDown___tdHIs').click()
        cy.get('[id="react-select-3--option-3"]').click()
        cy.get('[data-localization-key="menu.translate-show-original-prompt"]').scrollIntoView()
          .should('include.text','from Lithuanian to English')
    })
})

describe('restaurant page: language selection, mobile', function() {

  beforeEach(() => {
    cy.viewport(360, 640)
  })

    it('selects Russian as restaurant page language, mobile', function() {
        cy.visit (baseUrl + 'en/ltu/vilnius/restaurant/cili-pizza-big')
        cy.url({timeout:7000})
          .should('include', 'restaurant/cili-pizza-big')
        cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE').click()
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span').scrollIntoView()
          .click()
          cy.get('.Select__arrowDown___tdHIs').click()
          cy.get('[id="react-select-2--option-4"]').click()
          cy.get('[data-localization-key="menu.translate-show-original-prompt"]').scrollIntoView()
            .should('include.text','from Lithuanian to Russian')
    })

    it('selects original restaurant page language, mobile', function() {
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span', {timeout:7000})
          .click()
        cy.get('[data-localization-key="menu.translate-prompt"]', {timeout:7000})
          .scrollIntoView()
          .should('include.text', 'This menu is in Lithuanian')
    })

    it('selects English as restaurant page language, mobile', function() {
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span', {timeout:7000})
          .scrollIntoView()
          .click()
        cy.get('.Select__arrowDown___tdHIs').click()
        cy.get('[id="react-select-3--option-3"]').click()
        cy.get('[data-localization-key="menu.translate-show-original-prompt"]').scrollIntoView()
          .should('include.text','from Lithuanian to English')
    })
})