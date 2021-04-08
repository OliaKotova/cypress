const baseUrl = 'https://wolt.com/';

function ClickCookie() {
   cy.viewport(1366, 768)
   cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]', { timeout: 8000 }).should('be.visible').click()
}

context('Search restaurants by different criteria', () => {
   it('Search for restaurants nearby', () => {
      cy.visit(baseUrl + 'en/discovery')
      ClickCookie()
      cy.get('[data-test-id="Buttons.UserLocation"]').click()
      cy.get('#address').type('K. Donelaičio g. 75A').should('have.value', 'K. Donelaičio g. 75A')
      cy.get('[data-localization-key="front-view.fetch-address"]').click()
      cy.get(':nth-child(1) > .AddressPickerInput__result___1Ex5g', { timeout: 8000 }).should('contain', 'K. Donelaičio g. 75A').click()
      cy.get(':nth-child(6) > .JunctionComponent__WidthReference-sc-95wmzh-1 > .Header__headerContainer___FpF8K > .Header__buttonsContainer___33Jbt > .Header__showAllButton___3BRSv > span', { timeout: 8000 }).scrollIntoView()
         .should('be.visible').click()
   })

   it('Search for a restaurant by dish', () => {
      cy.visit(baseUrl + 'en/discovery')
      ClickCookie()
      cy.get('#SearchInputAnimated-input-id').type('pizza').should('have.value', 'pizza')
      cy.get('.Search__info-text-item___17UrV > span').click()
   })

   it('Search for a restaurant in the city', () => {
      cy.visit(baseUrl)
      ClickCookie()
      cy.get('[data-spec-id="front-all-countries-button"] > span').should('contain', 'All countries').click()
      cy.get('[data-spec-id="front-country-link-LTU"]').should('contain', 'Lithuania').click()
      cy.get('[data-spec-id="front-city-link-LTU-kaunas"]').should('contain', 'Kaunas').click()
      cy.scrollTo('center')
   })

   it('Search for a dish on the restaurant page', () => {
      cy.visit(baseUrl + 'en/ltu/kaunas/restaurant/mamma-pizza-vytauto-pr')
      ClickCookie()
      cy.get('#menu-search-input-id').type('42 cm').should('have.value', '42 cm')
      cy.scrollTo('center')
   })
})

context('Mob', () => {
   it('iPhone XR', () => {
      cy.viewport('iphone-xr')
      cy.visit(baseUrl + 'en/discovery')
      cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]', { timeout: 8000 }).should('be.visible').click()
      cy.get('#SearchInputAnimated-input-id').type('pizza').should('have.value', 'pizza')
      cy.get('.Search__info-text-item___17UrV > span').click()
   })

   it('iPhone 6+', () => {
      cy.viewport('iphone-6+')
      cy.visit(baseUrl + 'en/discovery')
      cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]', { timeout: 8000 }).should('be.visible').click()
      cy.get('#SearchInputAnimated-input-id').type('burger').should('have.value', 'burger')
      cy.get('.Search__info-text-item___17UrV > span').click()
   })

   it('Samsung-s10', () => {
      cy.viewport('samsung-s10')
      cy.visit(baseUrl + 'en/discovery')
      cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]', { timeout: 8000 }).should('be.visible').click()
      cy.get('#SearchInputAnimated-input-id').type('italian').should('have.value', 'italian')
      cy.get('.Search__info-text-item___17UrV > span').click()
   })
})