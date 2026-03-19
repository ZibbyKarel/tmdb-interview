import { PageShell, SurfaceCard } from '@ds';
import { Link, Outlet } from '@tanstack/react-router';
import type * as React from 'react';

export interface RootLayoutProps {}

const navLinkClasses =
  'rounded-full border border-card-border px-4 py-2 text-sm font-medium text-page-muted transition hover:border-page-accent/50 hover:text-page-text';

export const RootLayout: React.FC<RootLayoutProps> = () => {
  return (
    <PageShell>
      <SurfaceCard droppedShaddow padding="300">
        <nav className="mb-10 flex flex-wrap gap-3">
          <Link
            activeProps={{
              className:
                'rounded-full border border-page-accent/50 bg-page-accent/10 px-4 py-2 text-sm font-medium text-page-text',
            }}
            className={navLinkClasses}
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
            to="/login"
          >
            Login
          </Link>
        </nav>
        <div>
          <Outlet />
        </div>
      </SurfaceCard>
    </PageShell>
  );
};
