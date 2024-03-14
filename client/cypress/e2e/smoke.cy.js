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

  describe('GoalsPreferencesPage', () => {
    beforeEach(() => {
      cy.visit('/GoalsPreferencesPage');
    });
  
    it('should display the form elements', () => {
      cy.get('input[name="weightGoal"]').should('exist');
      cy.get('input[name="currentWeight"]').should('exist');
      cy.get('input[name="startingWeight"]').should('exist');
      cy.get('input[name="carbIntake"]').should('exist');
      cy.get('textarea[name="excludedIngredients"]').should('exist');
      cy.get('input[name="vegan"]').should('exist');
      cy.get('input[name="vegetarian"]').should('exist');
      cy.get('input[name="halal"]').should('exist');
      cy.get('button').contains('Save Preferences').should('exist');
    });
  
    it('should display the weight goal progress', () => {
      cy.get('[data-testid="weight-goal-progress"]').should('exist');
    });
  
    it('should save preferences when the save button is clicked', () => {
      cy.get('input[name="weightGoal"]').type('70');
      cy.get('input[name="currentWeight"]').type('75');
      cy.get('input[name="startingWeight"]').type('80');
      cy.get('input[name="carbIntake"]').type('150');
      cy.get('textarea[name="excludedIngredients"]').type('Dairy, Nuts');
      cy.get('input[name="vegan"]').check();
  
      cy.get('button').contains('Save Preferences').click();
  
      // Assert that preferences are saved
      cy.contains('Current Settings:').should('be.visible');
      cy.contains('Weight Goal: 70').should('be.visible');
      cy.contains('Current Weight: 75').should('be.visible');
      cy.contains('Starting Weight: 80').should('be.visible');
      cy.contains('Carb Intake: 150').should('be.visible');
      cy.contains('Excluded Ingredients: Dairy, Nuts').should('be.visible');
      cy.contains('Dietary Preferences: Vegan').should('be.visible');
    });
  });

  describe('MealPlanningPage', () => {
    beforeEach(() => {
        cy.visit('/MealPlanningPage'); 
    });

    it('renders the page title correctly', () => {
        cy.contains('h4', 'Meal Planning and Recipes').should('be.visible');
    });

    it('displays recipe cards with correct information', () => {
        cy.get('[data-testid="recipe-card"]').should('have.length', 25); 
        cy.get('[data-testid="recipe-card"]').each(($card, index) => {
            cy.wrap($card).within(() => {
                cy.get('h5').should('exist'); 
                cy.get('[data-testid="dietary-preference"]').should('exist'); 
                cy.get('[data-testid="cuisine"]').should('exist'); 
                cy.get('[data-testid="ingredients"]').should('exist'); 
                cy.get('[data-testid="instructions"]').should('exist'); 
            });
        });
    });

    it('searches for recipes correctly', () => {
        const searchText = 'vegetarian'; 
        cy.get('input[type="search"]').type(searchText); 
        cy.contains('button', 'Search').click(); 

        // Check if only vegetarian recipes are displayed
        cy.get('[data-testid="recipe-card"]').each(($card) => {
            cy.wrap($card).within(() => {
                cy.get('[data-testid="dietary-preference"]').should('contain', 'Vegetarian');
            });
        });
    });
});

  
