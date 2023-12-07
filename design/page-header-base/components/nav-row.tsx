import {
  PageHeaderMenuItem,
  PageHeaderMenuItemObject,
} from '@bit-nimble/design.page-header-menu-item';
import { HeaderRow } from './header-row';

export type NavRowProps = {
  navItems: PageHeaderMenuItemObject[];
};

export function NavRow({ navItems }: NavRowProps) {
  return (
    <HeaderRow
      sx={{
        justifyContent: 'start',
        gap: '16px',
      }}
    >
      {navItems.map((item) => (
        <PageHeaderMenuItem key={item.id} item={item} noIcon />
      ))}
    </HeaderRow>
  );
}
