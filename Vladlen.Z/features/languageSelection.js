describe('restaurant page: language selection, desktop', function() {

  beforeEach(function () {
    cy.viewport(1920, 1080)
    cy.fixture('baseUrl').then(function (baseUrl) {
        this.baseUrl = baseUrl
    })
  })

    it('selects Russian as restaurant page language, desktop', function() {
        cy.visit (this.baseUrl.baseUrlTestRestaraunt)
        cy.url({timeout:10000})
          .should('include', 'restaurant/cili-pizza-big')
        cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE').click()
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span').scrollIntoView()
          .click()
          cy.get('.Select__arrowDown___tdHIs').click()
          cy.get('[id="react-select-2--option-4"]').click()
          cy.get('[data-localization-key="menu.translate-show-original-prompt"]', {timeout:10000}).scrollIntoView()
            .should('include.text','from Lithuanian to Russian')
    })

    it('selects original restaurant page language, desktop', function() {
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span', {timeout:10000})
          .click()
        cy.get('[data-localization-key="menu.translate-prompt"]', {timeout:10000})
          .scrollIntoView()
          .should('include.text', 'This menu is in Lithuanian')
    })

    it('selects English as restaurant page language, desktop', function() {
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span', {timeout:10000})
          .scrollIntoView()
          .click()
        cy.get('.Select__arrowDown___tdHIs').click()
        cy.get('[id="react-select-3--option-3"]').click()
        cy.get('[data-localization-key="menu.translate-show-original-prompt"]').scrollIntoView()
          .should('include.text','from Lithuanian to English')
    })
})

describe('restaurant page: language selection, mobile', function() {

  beforeEach(function () {
    cy.viewport(360, 640)
    cy.fixture('baseUrl').then(function (baseUrl) {
        this.baseUrl = baseUrl
    })
  })

    it('selects Russian as restaurant page language, mobile', function() {
        cy.visit (this.baseUrl.baseUrlTestRestaraunt)
        cy.url({timeout:10000})
          .should('include', 'restaurant/cili-pizza-big')
        cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE').click({timeout:10000})
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span').scrollIntoView()
          .click()
          cy.get('.Select__arrowDown___tdHIs').click()
          cy.get('[id="react-select-2--option-4"]').click()
          cy.get('[data-localization-key="menu.translate-show-original-prompt"]').scrollIntoView()
            .should('include.text','from Lithuanian to Russian')
    })

    it('selects original restaurant page language, mobile', function() {
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span', {timeout:10000})
          .click()
        cy.get('[data-localization-key="menu.translate-prompt"]', {timeout:10000})
          .scrollIntoView()
          .should('include.text', 'This menu is in Lithuanian')
    })

    it('selects English as restaurant page language, mobile', function() {
        cy.get('.LanguageSelector__TextButton-sc-1yfb4nd-2 > span', {timeout:10000})
          .scrollIntoView()
          .click()
        cy.get('.Select__arrowDown___tdHIs').click()
        cy.get('[id="react-select-3--option-3"]').click()
        cy.get('[data-localization-key="menu.translate-show-original-prompt"]').scrollIntoView()
          .should('include.text','from Lithuanian to English')
    })
})