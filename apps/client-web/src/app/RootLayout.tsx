import { PageShell, SurfaceCard } from '@tmdb-interview/components';
import { Link, Outlet } from '@tanstack/react-router';

const navLinkClasses =
  'rounded-full border border-card-border px-4 py-2 text-sm font-medium text-page-muted transition hover:border-page-accent/50 hover:text-page-text';

export function RootLayout() {
  return (
    <PageShell>
      <SurfaceCard>
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
        <Outlet />
      </SurfaceCard>
    </PageShell>
  );
}
