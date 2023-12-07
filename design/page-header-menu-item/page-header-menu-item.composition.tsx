import { PageHeaderMenuItem } from './page-header-menu-item';

export const BasicPageHeaderMenuItem = () => {
  return (
    <PageHeaderMenuItem
      item={{
        id: 'checkout',
        title: 'Checkout',
        icon: '🛒',
        menuContent: <div>Checkout</div>,
      }}
    />
  );
};
