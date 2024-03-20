import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import GoalsPreferencesPage from '../components/App/GoalsPreferencesPage';

describe('GoalsPreferencesPage', () => {
    test('renders GoalsPreferencesPage component', () => {
        const { getByLabelText, getByText } = render(
            <MemoryRouter>
            <GoalsPreferencesPage />
          </MemoryRouter>
        )
    });
});