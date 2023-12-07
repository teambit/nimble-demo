import { render } from '@testing-library/react';
import { BasicPageHeaderMenuItem } from './page-header-menu-item.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicPageHeaderMenuItem />);
  const rendered = getByText('Checkout');
  expect(rendered).toBeTruthy();
});
