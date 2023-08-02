import React, { FC } from 'react';
import { useStyles } from './TicketRedirectButtonStyles';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useTranslation } from 'react-i18next';

type TicketRedirectButtonProps = {
  url: string;
  testId?: string;
};

const TicketRedirectButton: FC<TicketRedirectButtonProps> = ({ url, testId }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <a data-testid={testId} className={styles.root} href={url}>
      <div className={styles.button}>
        <div>{t('ticketRedirect')}</div>
        <ArrowForwardIosOutlinedIcon sx={{ fontSize: 14 }} />
      </div>
    </a>
  );
};

export default TicketRedirectButton;
