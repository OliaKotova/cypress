context('Checking the page translation', () => {

   beforeEach(() => {
      cy.viewport(1366, 768).wait(2000)
      cy.visit('https://wolt.com/').wait(5000)
      cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click()
   })
   it('Russian', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('Русский').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', 'Адрес доставки')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'ru')
   })

   it('Azerbaijani', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('Azerbaijani').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', 'Çatdırılma ünvanı')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'az')
   })

   it('Latvia', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('Latviešu').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', 'Piegādes adrese')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'lv')
   })

   it('Slovenian', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('Slovenščina').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', 'Tvoj naslov')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'sl')
   })

   it('Japanese', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('日本語').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', '配⁠達⁠先⁠の住⁠所')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'ja')
   })

   it('English', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('English').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', 'Delivery address')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'en')
   })

   it('Lithuanian', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('Lietuvių').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', 'Pristatymo adresas')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'lt')
   })

   it('Polish', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('Polski').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', 'Adres dostawy')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'pl')
   })

   it.only('Czech', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('Čeština').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', 'Adresa doručení')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'cs')
   })

   it('Georgian', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('ქართული').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', 'თქვენი მისამართი')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'ka')
   })

   it('Greek', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('Ελληνικά').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', 'Διεύθυνση')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'el')
   })

   it('Slovakian', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('Slovak').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', 'Adresa doručenia')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'sk')
   })

   it('Hrvatski', () => {
      cy.get('#user-status-language-title').click().wait(2000)
      cy.get('.UserStatus__language-option___6QxqQ').children()
      cy.contains('Hrvatski').click().wait(2000)
      cy.reload()
      cy.get('.header_words_animated__headers___3rMqS').should('be.visible')
      cy.get('.FrontHeroBanner__addressLabel___3dKsZ > span').should('contain.text', 'Adresa za dostavu')
      cy.get('.LottiePlayer__container___pgY3o > svg').click()
      cy.url().should('include', 'hr')
   })

})