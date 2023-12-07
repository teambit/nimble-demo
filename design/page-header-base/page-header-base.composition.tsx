import { PageHeaderBase } from './page-header-base';

const mockActionItems = [
  {
    id: 'checkout',
    title: 'Checkout',
    icon: '🛒',
    menuContent: <div>Checkout</div>,
  },
  {
    id: 'account',
    title: 'Account',
    icon: '👤',
    menuContent: <div>Account</div>,
  },
  {
    id: 'cart',
    title: 'Cart',
    icon: '🛒',
    menuContent: <div>Cart</div>,
  },
];

const mockNavItems = [
  {
    id: 'home',
    title: 'Home',
    icon: '🏠',
    menuContent: <div>Home</div>,
  },
  {
    id: 'products',
    title: 'Products',
    icon: '📦',
    menuContent: <div>Products</div>,
  },
  {
    id: 'about',
    title: 'About',
    icon: '📝',
    menuContent: <div>About</div>,
  },
];

export const DefaultBaseHeader = () => {
  return <PageHeaderBase />;
};

export const WithNav = () => {
  return <PageHeaderBase navItems={mockNavItems} />;
};

export const WithoutNavWithActions = () => {
  return (
    <PageHeaderBase actionItems={mockActionItems} navItems={mockNavItems} />
  );
};

export const WithoutNav = () => {
  return <PageHeaderBase actionItems={mockActionItems} showNavRow={false} />;
};
