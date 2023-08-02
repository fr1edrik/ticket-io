import React, { FC, useState, useEffect } from 'react';
import { TICKETS } from '../../service/mockdata/bootshaus';
import { useTranslation } from 'react-i18next';
import { useStyles } from './TicketViewStyles';
import TicketGridView from './Modes/TicketGridView';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TicketListView from './Modes/TicketListView';
import { Ticket } from '../../service/models/ticket';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Title from '../Text/Title';
import ToggleButton from '../Button/ToggleButton';

enum ViewMode {
  GRID,
  LIST,
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f2f2f2',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const TicketView: FC = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const [tickets, setTickets] = useState<Ticket[]>();
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.GRID);

  useEffect(() => {
    setTickets(TICKETS);
  }, []);

  const RenderedTicketView = () => {
    if (!tickets) {
      return <span>{t('error.generic')}</span>;
    }

    switch (viewMode) {
      case ViewMode.GRID:
        return <TicketGridView className={styles.transition} tickets={tickets} />;
      case ViewMode.LIST:
        return <TicketListView className={styles.transition} tickets={tickets} />;
      default:
        break;
    }

    return <span>{t('error.generic')}</span>;
  };

  return (
    <div className={styles.root}>
      <div className={styles.headerbar}>
        <div data-testid="ticket_view_header_title">
          <Title>{t('title')}</Title>
        </div>
        <div className={`${styles.flexRow} ${styles.gap24}`}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <span data-testid="ticket_view_toggle_label">{t('display')}</span>
          <div className={`${styles.flexRow} ${styles.gap12}`}>
            <ToggleButton testid="ticket_view_toggle_grid_btn" isActive={viewMode === ViewMode.GRID} onClick={() => setViewMode(ViewMode.GRID)}>
              <GridViewOutlinedIcon />
            </ToggleButton>

            <ToggleButton testid="ticket_view_toggle_list_btn" isActive={viewMode === ViewMode.LIST} onClick={() => setViewMode(ViewMode.LIST)}>
              <FormatListBulletedOutlinedIcon />
            </ToggleButton>

            <ToggleButton>
              <CalendarMonthOutlinedIcon />
            </ToggleButton>
          </div>
        </div>
      </div>
      <div className={styles.flexCol}>
        <RenderedTicketView />
      </div>
    </div>
  );
};

export default TicketView;
