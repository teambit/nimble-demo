import { PageHeaderMenuItemObject } from '@bit-nimble/design.page-header-menu-item';
import { CheckoutNavMenuContent } from '@bit-nimble/checkout.checkout-nav-menu-content';

export const checkoutActionItem: PageHeaderMenuItemObject = {
  id: 'checkout',
  title: 'Checkout',
  icon: '🛒',
  menuContent: <CheckoutNavMenuContent />,
};
