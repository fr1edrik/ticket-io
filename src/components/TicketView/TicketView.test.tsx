import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TicketView from './TicketView';

test('TicketView', () => {
  render(<TicketView />);
  expect(screen.getByTestId('ticket_view_header_title')).toHaveTextContent('title');
  expect(screen.getByTestId('ticket_view_toggle_label')).toHaveTextContent('display');

  // Per default already grid
  expect(screen.getByTestId('ticket_grid_view')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('ticket_view_toggle_list_btn'));
  expect(screen.getByTestId('ticket_list_view')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('ticket_view_toggle_grid_btn'));
  expect(screen.getByTestId('ticket_grid_view')).toBeInTheDocument();
});
