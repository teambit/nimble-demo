import React from 'react';
import { render } from '@testing-library/react';
import { BasicCheckoutNavMenuContent } from './checkout-nav-menu-content.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicCheckoutNavMenuContent />);
  const rendered = getByText('Add some products!');
  expect(rendered).toBeTruthy();
});
