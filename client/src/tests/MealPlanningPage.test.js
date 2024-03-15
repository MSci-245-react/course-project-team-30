import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import MealPlanningPage from '../components/App/MealPlanningPage';

test('renders MealPlanningPage component', () => {
  const { getByLabelText, getByText } = render(
  <MemoryRouter>
      <MealPlanningPage />
    </MemoryRouter>
  )
});
