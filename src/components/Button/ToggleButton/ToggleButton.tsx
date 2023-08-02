import React, { FC } from 'react';
import { ButtonBase } from '@mui/material';
import { useStyles } from './ToggleButtonStyles';

type ToggleButtonProps = {
  isActive?: boolean;
  testid?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & React.PropsWithChildren;

const ToggleButton: FC<ToggleButtonProps> = ({ isActive, onClick, testid, children }) => {
  const styles = useStyles();
  const activeClass = isActive ? 'active' : '';
  return (
    <ButtonBase type="button" data-testid={testid} onClick={onClick} className={`${styles.root} ${activeClass}`}>
      {children}
    </ButtonBase>
  );
};

export default ToggleButton;
