import { MenuItem } from '@mui/material';
import { PageHeaderMenuItemObject } from '@bit-nimble/design.page-header-menu-item';

export function SupportNavMenuContent() {
  return (
    <div>
      <MenuItem>Help</MenuItem>
      <MenuItem>FAQ</MenuItem>
      <MenuItem>Contact</MenuItem>
    </div>
  );
}

export const supportActionItem: PageHeaderMenuItemObject = {
  id: 'help',
  title: 'Support',
  icon: '📞',
  menuContent: <SupportNavMenuContent />,
};
