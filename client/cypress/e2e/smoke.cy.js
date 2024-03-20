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
  
      cy.contains('Email').should('be.visible');
      cy.contains('Password').should('be.visible');
      cy.contains('Sign Up').should('be.visible');
    });
  
    it('should navigate to the Log In page when Sign In button is clicked', () => {
      cy.contains('Sign In').click();
  
      cy.url().should('include', '/SignIn');
  
      cy.contains('Password').should('be.visible');
      cy.contains('Log In').should('be.visible');
    });
  });

  describe('GoalsPreferencesPage', () => {
    beforeEach(() => {
      cy.visit('/GoalsPreferencesPage');
    });
  
    it('should display the form elements', () => {
      cy.contains('Weight Goal (kg)').should('exist');
      cy.contains('Current Weight (kg)').should('exist');
      cy.contains('Starting Weight (kg)').should('exist');
      cy.contains('Carb Intake (g per day)').should('exist');
      cy.contains('Excluded Ingredients').should('exist');
      cy.contains('Vegetarian').should('exist');
      cy.contains('Halal').should('exist');
      cy.contains('Save Preferences').should('exist');
    });
  
    it('should display the weight goal progress', () => {
      cy.contains('Weight Goal Progress').should('exist');
    });
  });
  
  describe('MealPlanningPage', () => {
    beforeEach(() => {
      cy.visit('/MealPlanningPage');
    });
  
    it('displays recipe cards with correct information', () => {
      cy.contains('Carbonara').should('exist');
    });
  
    it('searches for recipes correctly', () => {
      cy.contains('Search for Recipes').should('exist');
    });
  });   