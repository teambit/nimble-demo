import { Box, Menu, Typography } from '@mui/material';
import React, { useState } from 'react';
import { PageHeaderMenuItemObject } from './page-header-types';

export type PageHeaderMenuItemProps = {
  item: PageHeaderMenuItemObject;
  /** Will not render icon even if provided */
  noIcon?: boolean;
};

export function PageHeaderMenuItem({
  item,
  noIcon = false,
}: PageHeaderMenuItemProps) {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(e.currentTarget);
    }
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const BORDER_SIZE = 4;

  return (
    <Box
      onClick={handleClick}
      key={item.id}
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        pt: `${BORDER_SIZE}px`,
        borderBottom: `${BORDER_SIZE}px solid transparent`,
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
          borderBottom: `${BORDER_SIZE}px solid #186DF5`,
        },
      }}
    >
      {item.icon && !noIcon ? item.icon : null}
      <Typography variant="body1">{item.title}</Typography>
      {item.menuContent ? (
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl && !!item.menuContent}
          onClose={closeMenu}
          disableRestoreFocus
          PopoverClasses={{
            root: 'header-menu',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Box sx={{ p: 1 }}>{item.menuContent}</Box>
        </Menu>
      ) : null}
    </Box>
  );
}
