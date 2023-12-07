import { Paper, Typography } from '@mui/material';
import { PageHeaderMenuItemObject } from '@bit-nimble/design.page-header-menu-item';
import {Logo} from '@bit-nimble/design.logo'
import { ActionRow, ActionRowProps } from './components/action-row';
import { NavRow } from './components/nav-row';

export type PageHeaderBaseProps = {
  showNavRow?: boolean;
  openSlot?: ActionRowProps['openSlot'];
  actionItems?: PageHeaderMenuItemObject[];
  navItems?: PageHeaderMenuItemObject[];
  title?: string;
} & ActionRowProps;

export function PageHeaderBase({
  actionItems = [],
  navItems = [],
  openSlot,
  title,
  showNavRow = true,
}: PageHeaderBaseProps) {
  const shouldRenderNavRow = showNavRow && navItems.length;

  const titleSlot = title ? (
    <Typography variant="h6" component="h1">
      {title}
    </Typography>
  ) : null;

  return (
    <Paper
      component="header"
      elevation={1}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        overflow: 'hidden',
      }}
    >
      <ActionRow
        actionItems={actionItems}
        logoSlot={<Logo/>}
        titleSlot={titleSlot}
        openSlot={openSlot}
        noBorder={!shouldRenderNavRow}
      />
      {shouldRenderNavRow ? <NavRow navItems={navItems} /> : null}
    </Paper>
  );
}
