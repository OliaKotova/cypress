context('Authorization form', () => {

   beforeEach(() => {
      cy.viewport(1366, 768).wait(2000)
      cy.visit('https://wolt.com/en/discovery').wait(5000)
      cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]').click()
   })
   it('Checking the login form elements.js', () => {
      cy.get('[data-test-id="UserStatus.Login"]').click().wait(2000)
      cy.contains('Create an account or log in').should('exist')
      cy.contains('Continue with Google').should('exist')
      cy.contains('Continue with Apple').should('exist')
      cy.contains('Continue with Facebook').should('exist')
      cy.contains('Email').should('exist')
      cy.contains('Next').should('exist')
   })
/*
    //captcha
   it('Login with email', () => {                              
      cy.get('[data-test-id="UserStatus.Login"]').click().wait(2000)
      cy.get('input[type="email"]').type('testmail@mailinator.com').should('have.value', 'testmail@mailinator.com')
      cy.get('.Button__Content-a3fg5q-3 > span').click()
   })
   
//a new window opens
   it('Login with Google', () => {                               
      cy.get('[data-test-id="UserStatus.Login"]').click().wait(2000)
      cy.get('[data-localization-key="auth.method-select.google-button"]').click().wait(2000)
   })

   it('Login with Facebook', () => {                               
      cy.get('[data-test-id="UserStatus.Login"]').click().wait(2000)
      cy.get('[data-localization-key="auth.method-select.facebook-button"]').click().wait(2000)
   })
*/
})