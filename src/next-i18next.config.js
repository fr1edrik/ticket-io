import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    defaultLocale: 'en',
    locales: ['en', 'de'],
    resources: {
      en: {
        translation: {
          title: 'Tickets for Bootshaus',
          priceFrom: 'Price From',
          clock: '',
          ticketRedirect: 'To Tickets',
          ticketsAt: 'Tickets at',
          from: 'from',
          at: 'At',
          euro: 'Euro',
          display: 'Display',
          error: {
            generic: 'Something went wrong',
          },
        },
      },
      de: {
        translation: {
          title: 'Tickets für Bootshaus',
          priceFrom: 'Ticket ab',
          clock: 'Uhr',
          ticketRedirect: 'Zu den Tickets',
          ticketsAt: 'Tickets ab',
          from: 'ab',
          at: 'Am',
          display: 'Ansicht',
          error: {
            generic: 'Es ist etwas schiefgelaufen',
          },
        },
      },
    },
  });

export default i18n;
