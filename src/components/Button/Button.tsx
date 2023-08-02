import { ButtonBase } from '@mui/material';
import React, { FC } from 'react';
import { useStyles } from './ButtonStyles';

type ButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & React.PropsWithChildren;

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  const styles = useStyles();
  return (
    <ButtonBase type="button" onClick={onClick} className={`${styles.root} ${className}`}>
      {children}
    </ButtonBase>
  );
};

export default Button;
