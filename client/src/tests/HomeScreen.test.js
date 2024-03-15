import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import HomeScreen from '../components/App/HomeScreen';

test('renders welcome message', () => {
  const { getByText } = render(
    <MemoryRouter>
      <HomeScreen />
    </MemoryRouter>
  );
});
