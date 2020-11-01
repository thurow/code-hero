import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  expect(screen.getByAltText('Objective')).toBeInTheDocument();
  expect(screen.getByText(/Alexandre/i)).toBeInTheDocument();
  expect(screen.getByText(/Teste/i)).toBeInTheDocument();
  expect(screen.getByText(/AF/i)).toBeInTheDocument();
});
