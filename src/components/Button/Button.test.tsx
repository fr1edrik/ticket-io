import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

test('button', () => {
  const mockFunction = jest.fn();

  render(<Button onClick={mockFunction}>Mock</Button>);
  fireEvent.click(screen.getByText(/Mock/));

  expect(mockFunction).toHaveBeenCalled();
  expect(screen.getByText(/Mock/)).toBeInTheDocument();
});
