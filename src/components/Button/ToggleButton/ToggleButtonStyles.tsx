import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	root: {
		display: 'block',
		color: 'black',
		borderRadius: '8px !important',
		padding: '4px 8px !important',
		'&.active': {
			color: 'white',
			backgroundColor: 'black',
		},
		'&:not(.active)&:hover': {
			backgroundColor: '#f2f2f2',
		},
	},
}));
