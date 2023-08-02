import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {},
  tablePaging: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '32px 0px',
  },
  verticalCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  numberList: {
    listStyle: 'none',
    display: 'inline-block',
    padding: 0,
    '& li': {
      display: 'inline-block',
      padding: '0 8px',
    },
  },
  hidden: {
    visibility: 'hidden',
  },
}));
