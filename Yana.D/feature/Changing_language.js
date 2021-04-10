
//in development
describe('Change website language', function() {
    it('Adding dishes to the order', function(){
        cy.viewport(1280, 800)
        cy.visit('https://wolt.com/en/')

        //close cookie
        cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
        .click()
      
        cy.get(':nth-child(3) > .Popover__root___2rr9b > div > .HeaderDropdown__title___26KCX')
        .click()
        cy.contains('Deutsch')
        .click()
        cy.get('span#user-status-language-title')
        .should('have.text', 'Deutsch')
        cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span')
        .should('have.text', 'Lieferadresse')
       
    })
        
  })