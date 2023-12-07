import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeaderActionItem } from './header-action-item.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicHeaderActionItem />);
  const rendered = getByText('Help');
  expect(rendered).toBeTruthy();
});
