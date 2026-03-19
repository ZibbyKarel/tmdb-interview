import { PageShell, SurfaceCard } from '@tmdb-interview/components';
import { Link, Outlet } from '@tanstack/react-router';
import type { FC } from 'react';

export enum RootLayoutDataTestIds {
  Wrapper = 'root-layout-wrapper',
  Navigation = 'root-layout-navigation',
  HomeLink = 'root-layout-home-link',
  LoginLink = 'root-layout-login-link',
  Content = 'root-layout-content',
}

export interface RootLayoutProps {}

const navLinkClasses =
  'rounded-full border border-card-border px-4 py-2 text-sm font-medium text-page-muted transition hover:border-page-accent/50 hover:text-page-text';

export const RootLayout: FC<RootLayoutProps> = () => {
  return (
    <PageShell data-testid={RootLayoutDataTestIds.Wrapper}>
      <SurfaceCard>
        <nav
          className="mb-10 flex flex-wrap gap-3"
          data-testid={RootLayoutDataTestIds.Navigation}
        >
          <Link
            activeProps={{
              className:
                'rounded-full border border-page-accent/50 bg-page-accent/10 px-4 py-2 text-sm font-medium text-page-text',
            }}
            className={navLinkClasses}
            data-testid={RootLayoutDataTestIds.HomeLink}
            to="/"
          >
            Home
          </Link>
          <Link
            activeProps={{
              className:
                'rounded-full border border-page-accent/50 bg-page-accent/10 px-4 py-2 text-sm font-medium text-page-text',
            }}
            className={navLinkClasses}
            data-testid={RootLayoutDataTestIds.LoginLink}
            to="/login"
          >
            Login
          </Link>
        </nav>
        <div data-testid={RootLayoutDataTestIds.Content}>
          <Outlet />
        </div>
      </SurfaceCard>
    </PageShell>
  );
};
