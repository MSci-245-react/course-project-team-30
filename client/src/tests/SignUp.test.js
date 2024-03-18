import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUp from '../components/SignUp';
import { MemoryRouter } from 'react-router-dom';

test('renders the SignUp component', () => {
  const { getByLabelText, getByText } = render(
    <MemoryRouter>
      <SignUp />
    </MemoryRouter>
  );
});

