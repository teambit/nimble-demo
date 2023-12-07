import { PageHeader } from './page-header';

export function EcommerceHeader() {
  return (
    <PageHeader
      actionItems={[
        { id: 'cart', title: 'Cart', href: '/cart' },
        { id: 'login', title: 'Login', href: '/login' },
      ]}
      navItems={[
        { id: 'home', title: 'Home', href: '/' },
        { id: 'shop', title: 'Shop', href: '/shop' },
      ]}
    />
  );
}
