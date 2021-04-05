describe('Order', function() {

  beforeEach(() => {
    cy.viewport(1366,768)
  })

    it('adds one item to shopping cart', function() {
      //Precondition: User is anonymous
        cy.visit ('https://wolt.com/en/ltu/vilnius/restaurant/cili-pizza-big')
        cy.url({timeout:5000})
          .should('include', 'restaurant/cili-pizza-big')
        cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
            .click()
        cy.get(':nth-child(1) > .Categories__button___2PxO7 > span').click()
        cy.get(':nth-child(1) > :nth-child(1) > .MenuCategoryHeader__categoryArea___1PvcF > .MenuCategoryHeader__categoryHeader___qPjVL > .MenuCategoryHeader__category___pHQFw')
          .should('have.text', 'Picos 42 cm')
        cy.get('.CheckoutButton__button___2P0s-')
          .should('be.visible')
          .should('have.text', '0 items')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .MenuItem__itemContainer___1ylSL > .MenuItem__toggle___jBcIm > :nth-child(1) > .MenuItem__contentBorderContainer___3Os_h > .MenuItem__contentArea___Lj3rK > .MenuItem__left___27tG1 > div > .MenuItem__plusIcon___2W1-t > .PlusButton__plusButton___6rZ3r')
            .click()
        cy.get('[data-localization-key="order.status-login"]')
          .should('be.visible')
          .should('include.text', 'Log in to order')
        //ExpRes: 'Log in to order' button appears
    })

    it('adds additional accessories', function() {
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .MenuItem__itemContainer___1ylSL > .MenuItem__toggle___jBcIm > :nth-child(1) > .MenuItem__contentBorderContainer___3Os_h > .MenuItem__contentArea___Lj3rK')
          .scrollIntoView()
          .click()
        cy.get(':nth-child(2) > .Option__optionToggle___5ET87').click()
        cy.get(':nth-child(1) > .MenuOptionChooserValue__optionValue___3pkLP > .MenuOptionChooserValue__optionValueLeftContainer___lRW_P')
          .click()
        cy.get('.MenuOptionChooserValue__optionValueBall___2ps8D > div > .icon')
          .should('be.visible')
        cy.get('[data-localization-key="order.status-login"]')
          .should('be.visible')
          .should('include.text', 'Log in to order')
        //ExpRes: additional accessories added to primary item; 
        //'Log in to order' button is visible and clickable
    })
})