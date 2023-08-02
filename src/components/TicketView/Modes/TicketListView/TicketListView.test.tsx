import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { Ticket } from '../../../../service/models/ticket';
import moment from 'moment';
import TicketListView from './TicketListView';
import { formatCurrency } from '../../../../utils/currency';

const tickets: Ticket[] = [
  {
    title: 'NIBIRII FESTIVAL 2023',
    startDate: '2023-08-25T08:00:00+02:00',
    endDate: '2023-08-27T18:00:00+02:00',
    imageUrl: 'https://cdn.ticket.io/companies/3ppVsfbq/events/2u6qt8q2/img/holder-1080.jpg?90259e86',
    shopUrl: 'https://bootshaus-club.ticket.io/2u6qt8q2/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Am Badesee ',
      addressLocality: 'D\u00fcren',
      addressRegion: null,
      postalCode: '52349',
      addressCountry: 'Deutschland',
    },
    priceFrom: 49.99,
  },
  {
    title: 'INURFASE MASSIVE: Highlands of Doom',
    startDate: '2023-09-15T22:30:00+02:00',
    endDate: '2023-09-16T06:00:00+02:00',
    imageUrl: 'https://cdn.ticket.io/companies/aNyasSW2/events/bwc8gadz/img/holder-1080.jpg?137b4538',
    shopUrl: 'https://bootshaus-club.ticket.io/bwc8gadz/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Auenweg 173',
      addressLocality: 'K\u00f6ln',
      addressRegion: null,
      postalCode: '51063',
      addressCountry: 'Deutschland',
    },
    priceFrom: 33,
  },
  {
    title: 'Blacklist Festival 2023',
    startDate: '2023-10-07T19:00:00+02:00',
    endDate: '2023-10-08T07:00:00+02:00',
    imageUrl: 'https://cdn.ticket.io/companies/AM9W0KPv/events/hwuhn0xt/img/holder-1080.jpg?4c7d314c',
    shopUrl: 'https://bootshaus-club.ticket.io/hwuhn0xt/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Im Lipperfeld 23',
      addressLocality: 'Oberhausen',
      addressRegion: null,
      postalCode: '46047',
      addressCountry: 'Deutschland',
    },
    priceFrom: 25,
  },
  {
    title: 'Gutscheine Bootshaus',
    startDate: '2023-01-01T00:01:00+01:00',
    endDate: '2024-01-02T05:00:00+01:00',
    imageUrl: 'https://cdn.ticket.io/companies/DMnDlIN6/events/xln2rlc2/img/holder-1080.jpg?3c5eceb7',
    shopUrl: 'https://bootshaus-club.ticket.io/xln2rlc2/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Auenweg 173',
      addressLocality: 'K\u00f6ln',
      addressRegion: null,
      postalCode: '51063',
      addressCountry: 'Deutschland',
    },
    priceFrom: 0,
  },
];

test('TicketGridView', () => {
  render(<TicketListView tickets={tickets} />);

  tickets.forEach(({ title, startDate, address, shopUrl, priceFrom }, index) => {
    expect(screen.getByTestId(`ticket_view_list_title_${index}`)).toHaveTextContent(title);
    expect(screen.getByTestId(`ticket_view_list_address_${index}`)).toHaveTextContent(`${address.streetAddress}, ${address.addressLocality}`);
    expect(screen.getByTestId(`ticket_view_list_date_${index}`)).toHaveTextContent(
      `at ${moment(startDate).format('DD.MM.YY')}from ${moment(startDate).format('hh:mm')} clock`
    );
    expect(screen.getByTestId(`ticket_view_list_price_${index}`)).toHaveTextContent(`ticketsAt${formatCurrency(priceFrom, true)} euro`);
    expect(screen.getByTestId(`ticket_view_list_ticket_btn_${index}`)).toHaveAttribute('href', shopUrl);
  });
});
