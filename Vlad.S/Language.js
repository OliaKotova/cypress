describe('Change Language', () => {
    it(' list of languages ', () => {
      cy.visit('https://wolt.com/')

     //cookie
     cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
     .click()

    //checking the list of languages
    cy.get(':nth-child(3) > .Popover__root___2rr9b > div > .HeaderDropdown__title___26KCX')
    .click()
     cy.get('.UserStatus__languageList___3myV_ > li').should(($lis) => {
        expect($lis).to.have.length(23)
        expect($lis.eq(0)).to.contain('Azerbaijani')
        expect($lis.eq(1)).to.contain('Dansk')
        expect($lis.eq(2)).to.contain('Deutsch')
        expect($lis.eq(3)).to.contain('Eesti')
        expect($lis.eq(4)).to.contain('English')
        expect($lis.eq(5)).to.contain('Hrvatski')
        expect($lis.eq(6)).to.contain('Kazakh')
        expect($lis.eq(7)).to.contain('Latviešu')
        expect($lis.eq(8)).to.contain('Lietuvių')
        expect($lis.eq(9)).to.contain('Magyar')
        expect($lis.eq(10)).to.contain('Norsk')
        expect($lis.eq(11)).to.contain('Polski')
        expect($lis.eq(12)).to.contain('Slovak')
        expect($lis.eq(13)).to.contain('Slovenščina')
        expect($lis.eq(14)).to.contain('Srpski')
        expect($lis.eq(15)).to.contain('Suomi')
        expect($lis.eq(16)).to.contain('Svenska')
        expect($lis.eq(17)).to.contain('Čeština')
        expect($lis.eq(18)).to.contain('Ελληνικά')
        expect($lis.eq(19)).to.contain('Русский')
        expect($lis.eq(20)).to.contain('עִבְרִית')
        expect($lis.eq(21)).to.contain('ქართული')
        expect($lis.eq(22)).to.contain('日本語')
       })
     })


    it(' Change Language ', () => {
     cy.visit('https://wolt.com/')
     cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
     .click()
     cy.get(':nth-child(3) > .Popover__root___2rr9b > div > .HeaderDropdown__title___26KCX')
     .click()
     .should('have.text', 'English')
     cy.get(':nth-child(5) > .UserStatus__language-option___6QxqQ')
     .click()
     .should('have.text', 'English')

     //switch language
     cy.get(':nth-child(3) > .Popover__root___2rr9b > div > .HeaderDropdown__title___26KCX')
     .click()
     cy.get(':nth-child(2) > .UserStatus__language-option___6QxqQ')
     .click()
     .should('have.text', 'Dansk')
    })

    it('Latvia', () => {
    cy.visit('https://wolt.com/')
    cy.get('.ConsentsBanner__buttons___1PPnk > :nth-child(2) > .Button__button___1o5LE')
    .click()
     cy.get(':nth-child(3) > .Popover__root___2rr9b > div > .HeaderDropdown__title___26KCX')
    .click()
     cy.get(':nth-child(9) > .UserStatus__language-option___6QxqQ')
    .click()
    .should('have.text', 'Lietuvių')
    })
})
