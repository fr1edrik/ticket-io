import React from 'react';
import { render, screen } from '@testing-library/react';
import TicketRedirectButton from './TicketRedirectButton';

test('TicketRedirectButton', () => {
  render(<TicketRedirectButton url="ABC" />);
  expect(screen.getByText('ticketRedirect')).toBeInTheDocument();
  expect(screen.getByRole('link')).toHaveAttribute('href', 'ABC');
});
