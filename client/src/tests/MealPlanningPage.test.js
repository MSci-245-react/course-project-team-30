import React from 'react';
import { render } from '@testing-library/react';
import MealPlanningPage from '../src/components/App/MealPlanningPage';

test('renders MealPlanningPage component', () => {
  const { getByText } = render(<MealPlanningPage />);

  const title = getByText('Meal Planning and Recipes');
  expect(title).toBeInTheDocument();
 
  const searchInput = getByLabelText('Search for recipes');
  expect(searchInput).toBeInTheDocument();
 
  const searchButton = getByText('Search');
  expect(searchButton).toBeInTheDocument();

  const recipeCard = getByText(/Recipe \d/);
  expect(recipeCard).toBeInTheDocument();
});

describe('MealPlanningPage', () => {
  test('renders search input', () => {
    render(<MealPlanningPage />);
    const searchInput = screen.getByLabelText(/Search for Recipes/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('renders recipe cards', () => {
    render(<MealPlanningPage />);
    const recipeCards = screen.getAllByRole('article');
    expect(recipeCards.length).toBeGreaterThan(0);
  });
});
