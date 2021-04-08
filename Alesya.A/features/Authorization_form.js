context('Authorization form', () => {

   beforeEach(() => {
      cy.viewport(1366, 768)
      cy.visit('https://wolt.com/en/discovery')
      cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]',{ timeout: 5000 }).should('be.visible').click()
   })
   it('Checking the login form elements.js', () => {
      cy.get('[data-test-id="UserStatus.Login"]').click()
      //Create an account or log in
      cy.get('[id="auth-modal-title"]').should('exist')
      //Continue with Google
      cy.get('[data-localization-key="auth.method-select.google-button"]').should('exist')
      //Continue with Apple
      cy.get('[data-localization-key="auth.method-select.apple-button"]').should('exist')
      //Continue with Facebook
      cy.get('[data-localization-key="auth.method-select.facebook-button"]').should('exist')
      //Email
      cy.get('[data-test-id="StepMethodSelect.EmailInput"]').should('exist')
      //Next
      cy.get('[data-localization-key="auth.method-select.next-button"]').should('exist')
   })
  })