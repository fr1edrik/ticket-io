import React, { FC, Fragment, ReactNode } from 'react';
import { SxProps, Theme, Typography } from '@mui/material';

type TitleProps = {
  isSubtitle?: boolean;
  children: ReactNode;
  sx?: SxProps<Theme>;
};

const Title: FC<TitleProps> = ({ children, isSubtitle, sx }: TitleProps) => {
  return (
    <Fragment>
      {isSubtitle ? (
        <Typography data-testid="subtitle" variant="h3" sx={{ fontSize: 20, fontWeight: 600, ...sx }}>
          {children}
        </Typography>
      ) : (
        <Typography data-testid="title" variant="h2" sx={{ fontSize: 25, fontWeight: 'bold', ...sx }}>
          {children}
        </Typography>
      )}
    </Fragment>
  );
};

export default Title;
