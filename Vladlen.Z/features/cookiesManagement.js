describe('cookies management', function() {

  beforeEach(() => {
    cy.viewport(1366,768)
  })

    it('accepts cookies', function() {
        cy.visit('https://wolt.com/')
        //ExpRes: User have to accept cookies to continue
        cy.get('.noscroll') //prevents User from scrolling
          .should('exist')
        cy.get('.ConsentsBanner__descriptionContainer___2LTmu')
          .should('be.visible')
        cy.get('.ConsentsBanner__buttons___1PPnk')
          .should('be.visible')
        cy.get(':nth-child(1) > .Button__button___1o5LE > span')
          .should('be.visible')
        cy.get(':nth-child(2) > .Button__button___1o5LE > span')
          .should('be.visible')
          .click()
        //ExpRes:elements above should not exist in DOM after acception
        cy.get('.ConsentsBanner__descriptionContainer___2LTmu')
          .should('not.exist')
        cy.get('.ConsentsBanner__buttons___1PPnk')
          .should('not.exist')
        cy.get(':nth-child(1) > .Button__button___1o5LE > span')
          .should('not.exist')
        cy.get(':nth-child(2) > .Button__button___1o5LE > span')
          .should('not.exist')
        cy.get('.noscroll')
          .should('not.exist')

    })

    it('toggles additional options', function(){
      cy.visit('https://wolt.com/')
      //ExpRes: User can't uncheck neccessary cookies
      cy.get(':nth-child(1) > .Button__button___1o5LE > span').click()
      cy.get('.ManageConsentsDialog__root___1ZEAt')
        .should('be.visible')
        .click('bottom')
      cy.get('[type="checkbox"]')
        .should('have.length', 4)
        .and('not.be.visible')
      cy.get('[class="toggle-flat"]').should('have.length', 3)
        .click({multiple:true})
      cy.get('[class="toggle-flat toggle--checked toggle--disabled"]')
        .should('have.length', 1)
      cy.get('[class="Button__button___1o5LE"]').click()
      })
})