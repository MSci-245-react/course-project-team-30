import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HomeScreen from '../src/components/App/HomeScreen';

test('renders HomeScreen component with buttons', () => {
  const { getByText } = render(<HomeScreen />);
  
  expect(getByText('Welcome to HealthyPlate')).toBeInTheDocument();
  expect(getByText('Plan your meals, track your nutrition, and achieve your dietary goals!')).toBeInTheDocument();
  expect(getByText('Sign Up')).toBeInTheDocument();
  expect(getByText('Log In')).toBeInTheDocument();
});

test('clicking Sign Up button navigates to SignUp page', () => {
  const { getByText } = render(<HomeScreen />);
  fireEvent.click(getByText('Sign Up'));
  
  expect(window.location.pathname).toBe('/SignUp');
});

test('clicking Log In button navigates to LoginPage', () => {
  const { getByText } = render(<HomeScreen />);
  fireEvent.click(getByText('Log In'));
  
  expect(window.location.pathname).toBe('/LoginPage');
});
