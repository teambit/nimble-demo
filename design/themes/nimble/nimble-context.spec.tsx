import { render } from '@testing-library/react';
import { BasicUsage } from './nimble-context.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUsage />);
  const rendered = getByText('Hola!');
  expect(rendered).toBeTruthy();
});
