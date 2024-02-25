describe('Homepage', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should display the welcome message', () => {
      cy.contains('Welcome to HealthyPlate').should('be.visible');
    });
  
    it('should navigate to the SignUp page when Sign Up button is clicked', () => {
      cy.contains('Sign Up').click();
  
      cy.url().should('include', '/SignUp');
  
      cy.contains('Sign Up').should('be.visible');
      cy.contains('Email').should('be.visible');
      cy.contains('Name').should('be.visible');
      cy.contains('Username').should('be.visible');
      cy.contains('Password').should('be.visible');
      cy.contains('Sign Up').should('be.visible');
    });
  
    it('should navigate to the Log In page when Log In button is clicked', () => {
      cy.contains('Log In').click();
  
      cy.url().should('include', '/LoginPage');
  
      cy.contains('Log In').should('be.visible');
      cy.contains('Username').should('be.visible');
      cy.contains('Password').should('be.visible');
      cy.contains('Log In').should('be.visible');
    });
  });
  
