import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import Title from './Title';

test('title', () => {
  render(<Title>Mock</Title>);

  expect(screen.getByText(/Mock/)).toBeInTheDocument();

  expect(screen.getByTestId('title')).toBeInTheDocument();

  cleanup();
  render(<Title isSubtitle>Mock</Title>);
  expect(screen.getByTestId('subtitle')).toBeInTheDocument();
});
