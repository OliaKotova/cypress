describe('Login', () => {
    it('Visiting Discovery.Quest', () => {
      cy.visit('https://wolt.com/en/discovery')

    //Open Login pop-up
      cy.get(':nth-child(1) > .UserStatus__button___1kuOa')
      .click()
      cy.contains("Accept")
      .click()

     // Click on the 'continue with mail' 
     cy.wait(5000)
     cy.get('.Input__InputComponent-cy5jpp-0')
      .type('sorokaatp@mail.ru')
      cy.wait(4000)
     cy.get('.Button__SpinnerContainer-a3fg5q-4 gkWVxG').click()

    })
})