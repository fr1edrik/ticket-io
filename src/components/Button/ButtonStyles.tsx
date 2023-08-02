import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	root: {
		width: 'fit-content',
		animation: '$fadeIn 1s',
		display: 'flex',
		padding: '8px 32px',
		color: 'white',
		backgroundColor: 'black',
		border: '2px solid black',
		borderRadius: '8px',
		alignItems: 'center',
		gap: '32px',
		transition: 'background-color 0.2s ease-in',
		'&:hover': {
			backgroundColor: 'white',
			color: 'black',
		},
	},
	'@keyframes fadeIn': {
		from: { opacity: 0 },
		to: { opacity: 1 },
	},
}));
