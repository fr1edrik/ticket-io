import React, { FC } from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Box } from '@mui/material';
import { Ticket } from '../../../../service/models/ticket';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import moment from 'moment';
import { formatCurrency } from '../../../../utils/currency';
import TicketRedirectButton from '../../../Button/TicketRedirectButton';
import styled from '@emotion/styled';
import { useStyles } from './TicketListViewStyles';
import Title from '../../../Text/Title';
import usePaging from '../../../../utils/hooks/pagingHook';
import TablePaging from './TablePaging';
import { useTranslation } from 'react-i18next';

type TicketListViewProps = {
  tickets: Ticket[];
  className?: string;
};

const TicketListView: FC<TicketListViewProps> = ({ tickets, className }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const pageSize = 8;
  const {
    data,
    currentPageNumer,
    setCurrentPageNumer: setPage,
    pageCount,
  } = usePaging({
    data: tickets,
    pageSize,
  });

  const StyledTableRow = styled(TableRow)(() => ({
    '&': {
      border: 0,
    },
    '&:nth-of-type(odd)': {
      backgroundColor: '#f2f2f2',
    },
  }));

  return (
    <div data-testid="ticket_list_view" className={className} style={{ width: '100%' }}>
      <TableContainer>
        <Table>
          <TableBody>
            {data.map(({ title, address, startDate, priceFrom, shopUrl }, index) => (
              <StyledTableRow key={index}>
                <TableCell>
                  <span>
                    <div data-testid={`ticket_view_list_title_${index}`} style={{ padding: 4 }}>
                      <Title isSubtitle>{title}</Title>
                    </div>
                    <div data-testid={`ticket_view_list_address_${index}`} className={styles.verticalCenter}>
                      <PlaceOutlinedIcon fontSize="small" />
                      <span>{address.streetAddress}</span>
                      <span>, </span>
                      <span>{address.addressLocality}</span>
                    </div>
                  </span>
                </TableCell>
                <TableCell data-testid={`ticket_view_list_date_${index}`}>
                  <span>
                    <div>
                      {t('at')} {moment(startDate).format('DD.MM.YY')}
                    </div>
                    <div>
                      {t('from')} {moment(startDate).format('hh:mm')} {t('clock')}
                    </div>
                  </span>
                </TableCell>
                <TableCell data-testid={`ticket_view_list_price_${index}`}>
                  <span>
                    <div>{t('ticketsAt')}</div>
                    <div>
                      <b>
                        {formatCurrency(priceFrom, true)} {t('euro')}
                      </b>
                    </div>
                  </span>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <TicketRedirectButton testId={`ticket_view_list_ticket_btn_${index}`} url={shopUrl} />
                  </Box>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePaging currentPage={currentPageNumer} setPaging={setPage} pageSize={pageSize} pagesCount={pageCount} />
    </div>
  );
};

export default TicketListView;
