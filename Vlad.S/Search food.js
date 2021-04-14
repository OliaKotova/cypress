describe('Search food', () => {
  it('Visiting Discovery.Quest', () => {
    cy.visit('https://wolt.com/')
    cy.contains("Accept").click()
    cy.get('.InputField__input___1bicp').type('Ozo g. 25, Vilnius, Lithuania')
    cy.wait(3000)
    cy.get('.Button__button___1o5LE ').click() 
    cy.wait(7000)
    cy.contains("Ozo g. 25, Vilnius, Lithuania").click()
  })

//Finding pizza in Vilnius
  it('Search pizza.Quest', () => {
    cy.visit('https://wolt.com/en/discovery')
    cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
    .click()
    cy.wait(4000)
    cy.get('.SearchInputAnimated__root___3qG8u ')
    .type('Pizza')
    cy.wait(4000)
    cy.get('.Search__info-text-item___17UrV')
    .click()
  })

 //Finding vegan food in Vilnius 
  it('Search vegan.Quest', () => {
    cy.get('#SearchInputAnimated-input-id')
    .clear()
    .type('Vegan')
    .should('have.value', 'Vegan')
    cy.wait(4000)
    cy.get('.Search__info-text-item___17UrV')
    .click()
    })

    //Finding sushi in Vilnius 
    it('Search sushi.Quest', () => {
      cy.get('#SearchInputAnimated-input-id')
      .clear()
      .type('Sushi')
      .should('have.value', 'Sushi')
      cy.wait(4000)
      cy.get('.Search__info-text-item___17UrV')
     .click()
   })


       //Finding invalid food in Vilnius 
       it('Invalid food.Quest', () => {
        cy.get('#SearchInputAnimated-input-id')
        .clear()
        .type('SELENIUM')       
        cy.get('.Search__info-text-item___17UrV')
        .should('be.visible') 
     })
})