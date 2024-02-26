import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUp from '../src/components/App/SignUp';

test('renders the SignUp component', () => {
  const { getByText, getByLabelText } = render(<SignUp />);
  
  expect(getByText('Sign Up')).toBeInTheDocument();
  expect(getByLabelText('Email')).toBeInTheDocument();
  expect(getByLabelText('Name')).toBeInTheDocument();
  expect(getByLabelText('Username')).toBeInTheDocument();
  expect(getByLabelText('Password')).toBeInTheDocument();
});

test('updates state when input fields change', () => {
  const { getByLabelText } = render(<SignUp />);
  
  fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(getByLabelText('Name'), { target: { value: 'John Doe' } });
  fireEvent.change(getByLabelText('Username'), { target: { value: 'johndoe123' } });
  fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });
  
  expect(getByLabelText('Email')).toHaveValue('test@example.com');
  expect(getByLabelText('Name')).toHaveValue('John Doe');
  expect(getByLabelText('Username')).toHaveValue('johndoe123');
  expect(getByLabelText('Password')).toHaveValue('password123');
});
