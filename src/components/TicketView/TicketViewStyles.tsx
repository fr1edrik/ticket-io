import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  headerbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '32px 24px',
    alignItems: 'center',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gap12: {
    gap: '12px',
  },
  gap24: {
    gap: '24px',
  },
  transition: {
    animation: '$fadeIn 1s',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));
