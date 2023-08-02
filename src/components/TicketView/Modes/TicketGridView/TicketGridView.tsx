import React, { FC } from 'react';
import moment from 'moment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/ScheduleOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import TicketIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { formatCurrency } from '../../../../utils/currency';
import { useStyles } from './TicketGridViewStyles';
import { Ticket } from '../../../../service/models/ticket';
import TicketRedirectButton from '../../../Button/TicketRedirectButton';
import { Grid } from '@mui/material';
import Title from '../../../Text/Title';
import { useTranslation } from 'react-i18next';

type TicketViewProps = {
  tickets: Ticket[];
  className?: string;
};

const TicketGridView: FC<TicketViewProps> = ({ tickets, className }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div data-testid="ticket_grid_view" className={`${styles.root} ${className || ''}`}>
      {tickets.map(({ address, endDate, imageUrl, priceFrom, shopUrl, startDate, title }, index) => (
        <Grid
          className={styles.highlight}
          container
          sx={{
            width: '100%',
            padding: '32px 16px',
            borderRadius: '8px',
            justifyContent: 'space-between',
          }}
          key={index}
        >
          <Grid data-testid={`ticket_grid_view_image_${index}`} xs item>
            <img className={styles.image} src={imageUrl}></img>
          </Grid>
          <Grid xs item>
            <Grid container direction="column" justifyContent="space-between" spacing={0.5}>
              <Grid data-testid={`ticket_grid_view_title_${index}`} xs item>
                <Title sx={{ marginBottom: '16px' }} isSubtitle>
                  {title}
                </Title>
              </Grid>
              <Grid xs item>
                <div className={styles.verticalCenter}>
                  <div data-testid={`ticket_grid_view_date_${index}`} className={styles.verticalCenter}>
                    <CalendarMonthIcon />
                    <span>{moment(startDate).format('dd. DD.MM.YYYY')}</span>
                  </div>
                  <div data-testid={`ticket_grid_view_time_${index}`} className={styles.verticalCenter}>
                    <ScheduleIcon />
                    <span>
                      {moment(startDate).format('hh:mm')} {t('clock')}
                    </span>
                  </div>
                </div>
              </Grid>
              <Grid data-testid={`ticket_grid_view_address_${index}`} xs item className={styles.verticalCenter}>
                <LocationOnIcon />
                <span>
                  {address.streetAddress}, {address.addressLocality}
                </span>
              </Grid>
              <Grid data-testid={`ticket_grid_view_price_${index}`} xs item className={styles.verticalCenter}>
                <TicketIcon />
                <span>{t('priceFrom') + ' ' + formatCurrency(priceFrom)}</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            xs
            item
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <TicketRedirectButton testId={`ticket_grid_view_ticket_btn_${index}`} url={shopUrl} />
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default TicketGridView;
