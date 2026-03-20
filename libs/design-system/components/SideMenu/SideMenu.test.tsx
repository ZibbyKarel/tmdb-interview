import { render, screen } from '@testing-library/react';
import { SideMenu } from './SideMenu';

it('renders the provided navigation items', () => {
  render(
    <SideMenu
      items={[
        { href: '/', label: 'Home' },
        { href: '/login', label: 'Login' },
      ]}
      title="Navigation"
    />
  );

  expect(screen.getByText('Navigation')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
    'href',
    '/'
  );
  expect(screen.getByRole('link', { name: 'Login' })).toHaveAttribute(
    'href',
    '/login'
  );
});

it('applies active styling to the selected item', () => {
  render(
    <SideMenu
      items={[
        { href: '/', isActive: true, label: 'Home' },
        { href: '/login', label: 'Login' },
      ]}
    />
  );

  expect(screen.getByRole('link', { name: 'Home' })).toHaveClass(
    'bg-white/40',
    'border-card-border'
  );
});
