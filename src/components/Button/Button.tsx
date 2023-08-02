import { ButtonBase } from '@mui/material';
import React, { FC } from 'react';
import { useStyles } from './ButtonStyles';

type ButtonProps = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & React.PropsWithChildren;

const Button: FC<ButtonProps> = ({ children, onClick }) => {
	const styles = useStyles();
	return (
		<ButtonBase type='button' onClick={onClick} className={styles.root}>
			{children}
		</ButtonBase>
	);
};

export default Button;
