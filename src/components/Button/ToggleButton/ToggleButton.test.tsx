import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import ToggleButton from './ToggleButton';

test('ToggleButton', () => {
  const mockFunction = jest.fn();

  render(<ToggleButton onClick={mockFunction}>Mock</ToggleButton>);
  const button = screen.getByText(/Mock/);
  fireEvent.click(button);

  expect(mockFunction).toHaveBeenCalled();
  expect(button).toBeInTheDocument();
  expect(screen.getByText(/Mock/)).not.toHaveClass('active');

  cleanup();
  render(<ToggleButton isActive>Mock</ToggleButton>);
  expect(screen.getByText(/Mock/)).toHaveClass('active');
});
