import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  image: {
    width: '500px',
    height: '250px',
    borderRadius: '8px',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  verticalCenter: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  highlight: {
    transition: 'box-shadow 0.2s ease-in',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
  },
}));
