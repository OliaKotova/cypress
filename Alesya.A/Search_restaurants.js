const baseUrl = 'https://wolt.com/';

function ClickCookie() {
   cy.viewport(1366, 768).wait(2000)
   cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click()
}

context('Search restaurants by different criteria', () => {
   it('Search for restaurants nearby', () => {
      cy.visit(baseUrl + 'en/discovery').wait(5000)
      ClickCookie()
      cy.get('[data-test-id="Buttons.UserLocation"]').click()
      cy.get('#address').type('K. Donelaičio g. 75A').should('have.value', 'K. Donelaičio g. 75A').wait(1000)
      cy.get('[data-localization-key="front-view.fetch-address"]').click().wait(1000)
      cy.get(':nth-child(1) > .AddressPickerInput__result___1Ex5g').should('contain', 'K. Donelaičio g. 75A').click().wait(3000)
      cy.get(':nth-child(6) > .JunctionComponent__WidthReference-sc-95wmzh-1 > .Header__headerContainer___FpF8K > .Header__buttonsContainer___33Jbt > .Header__showAllButton___3BRSv > span')
      .click()
      })

   it('Search for a restaurant by dish', () => {
      cy.visit(baseUrl + 'en/discovery')
      ClickCookie()
      cy.get('#SearchInputAnimated-input-id').type('pizza').should('have.value', 'pizza').wait(3000)
      cy.get('.Search__info-text-item___17UrV > span').click().wait(2000)
   })

   it('Search for a restaurant in the city', () => {
      cy.visit(baseUrl)
      ClickCookie()
      cy.get('[data-spec-id="front-all-countries-button"] > span').should('contain', 'All countries').click().wait(1000)
      cy.get('[data-spec-id="front-country-link-LTU"]').should('contain', 'Lithuania').click().wait(1000)
      cy.get('[data-spec-id="front-city-link-LTU-kaunas"]').should('contain', 'Kaunas').click().wait(4000)
      cy.scrollTo('center')
   })

   it('Search for a dish on the restaurant page', () => {
      cy.visit(baseUrl + 'en/ltu/kaunas/restaurant/mamma-pizza-vytauto-pr').wait(2000)
      ClickCookie()
      cy.get('#menu-search-input-id').type('42 cm').should('have.value', '42 cm').wait(3000)
      cy.scrollTo('center')
   })

})

context('Mob', () => {
   it('iPhone XR', () => {
      cy.viewport('iphone-xr').wait(2000)
      cy.visit(baseUrl + 'en/discovery')
      cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click().wait(2000)
      cy.get('#SearchInputAnimated-input-id').type('pizza').should('have.value', 'pizza').wait(3000)
      cy.get('.Search__info-text-item___17UrV > span').click()
   })

   it('iPhone 6+', () => {
      cy.viewport('iphone-6+').wait(2000)
      cy.visit(baseUrl + 'en/discovery')
      cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click().wait(2000)
      cy.get('#SearchInputAnimated-input-id').type('burger').should('have.value', 'burger').wait(3000)
      cy.get('.Search__info-text-item___17UrV > span').click()
   })

   it('Samsung-s10', () => {
      cy.viewport('samsung-s10').wait(2000)
      cy.visit(baseUrl + 'en/discovery')
      cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click().wait(2000)
      cy.get('#SearchInputAnimated-input-id').type('italian').should('have.value', 'italian').wait(3000)
      cy.get('.Search__info-text-item___17UrV > span').click()
   })

})