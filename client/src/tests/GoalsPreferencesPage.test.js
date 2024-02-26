import React from 'react';
import { render } from '@testing-library/react';
import GoalsPreferencesPage from '../src/components/App/GoalsPreferencesPage';

test('renders GoalsPreferencesPage component', () => {
  const { getByText } = render(<GoalsPreferencesPage />);
  const pageTitle = getByText('h4','Set Your Goals and Preferences');
  expect(pageTitle).toBeInTheDocument();
});
