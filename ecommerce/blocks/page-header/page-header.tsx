import { Box, BoxProps } from '@mui/material';
import { PageHeaderMenuItemObject } from '@bit-nimble/design.page-header-menu-item';
import { PageHeaderBase } from '@bit-nimble/design.page-header-base';
import { HeaderSearch } from './components/header-search';

export type HeaderSectionProps = {} & BoxProps;

export function HeaderSection({ sx: innerSx, ...props }: HeaderSectionProps) {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...innerSx,
      }}
    />
  );
}

export type HeaderRowProps = {} & BoxProps;

export function HeaderRow({ sx: innerSx, ...props }: HeaderRowProps) {
  return (
    <Box
      {...props}
      sx={{
        ...innerSx,
        display: 'flex',
        padding: '16px 32px',
        width: '100%',
      }}
    />
  );
}

export type PageHeaderProps = {
  actionItems?: PageHeaderMenuItemObject[];
  navItems?: PageHeaderMenuItemObject[];
};

export function PageHeader({
  actionItems = [],
  navItems = [],
}: PageHeaderProps) {
  return (
    <PageHeaderBase
      actionItems={actionItems}
      navItems={navItems}
      openSlot={<HeaderSearch />}
      title='Nimble Store'
    />
  );
}
