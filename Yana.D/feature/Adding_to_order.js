
describe('Order management', function() {
    it('Adding dishes to the order', function(){
        cy.viewport(1280, 800)
        cy.visit('https://wolt.com/en/ltu/vilnius/restaurant/kraken-pizza')

        //navigate to the category of pizza
        cy.get(':nth-child(3) > :nth-child(1) > .MenuCategoryHeader__categoryArea___1PvcF > .MenuCategoryHeader__categoryHeader___qPjVL > .MenuCategoryHeader__category___pHQFw')
        .scrollIntoView()
        //.should('be.visible')
        .should('have.text', 'Picos 40 cm')

        //click on "Amount" button 
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(3) > .MenuItem__itemContainer___1ylSL > .MenuItem__toggle___jBcIm > :nth-child(1) > .MenuItem__contentBorderContainer___3Os_h > .MenuItem__contentArea___Lj3rK > .MenuItem__left___27tG1 > div > .MenuItem__plusIcon___2W1-t > .PlusButton__plusButton___6rZ3r > svg')
        .click()
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(3) > .MenuItem__itemContainer___1ylSL > .MenuItem__toggle___jBcIm > :nth-child(1) > .MenuItem__contentBorderContainer___3Os_h > .MenuItem__contentArea___Lj3rK > .MenuItem__left___27tG1 > div > .CountLabel__countLabel___2M_oJ')
        .should('have.text', '1× ')
        //click on "Checkout" button
        cy.get('[data-test-id="Containers.Buttons.CheckoutButton"] > .CheckoutButton__loginButton___CN6Za')
        .click()
        .should('be.visible')
    })
        
    })
