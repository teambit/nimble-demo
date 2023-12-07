import { render, screen } from '@testing-library/react';
import { DefaultBaseHeader } from './page-header-base.composition';

describe('PageHeaderBase', () => {
  test('renders without crashing', () => {
    render(<DefaultBaseHeader />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeTruthy();
  });
});
