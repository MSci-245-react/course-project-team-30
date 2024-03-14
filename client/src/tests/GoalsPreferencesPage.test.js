import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GoalsPreferencesPage from '../src/components/App/GoalsPreferencesPage'; 

describe('GoalsPreferencesPage', () => {
    test('renders GoalsPreferencesPage component', () => {
        render(<GoalsPreferencesPage />);


        expect(screen.getByText('Set Your Goals and Preferences')).toBeInTheDocument();
        expect(screen.getByText('Weight Goal (kg)')).toBeInTheDocument();
       
    });

    test('calculates progress correctly when Save Preferences is clicked', () => {
        render(<GoalsPreferencesPage />);

   
        fireEvent.change(screen.getByLabelText('Weight Goal (kg)'), { target: { value: '80' } });
        fireEvent.change(screen.getByLabelText('Current Weight (kg)'), { target: { value: '75' } });
        fireEvent.change(screen.getByLabelText('Starting Weight (kg)'), { target: { value: '100' } });


        fireEvent.click(screen.getByText('Save Preferences'));

      
        expect(screen.getByText(/% Complete/)).toBeInTheDocument();
    });

});