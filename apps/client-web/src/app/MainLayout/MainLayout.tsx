import {
  Button,
  Container,
  IconMoon,
  IconSun,
  SideMenu,
  SurfaceCard,
  Toggle,
  Typography,
} from '@ds';
import { Outlet, useRouterState } from '@tanstack/react-router';
import type * as React from 'react';
import { Routes } from '../../routing/Routes';
import { useAppTheme } from '../appTheme';

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = () => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const { resolvedTheme, toggleTheme } = useAppTheme();

  const sideMenuItems = [
    {
      href: Routes.Index,
      isActive: pathname === Routes.Index || pathname.startsWith('/movies/'),
      label: 'Top rated movies',
    },
  ];

  return (
    <main className="min-h-screen px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
        <SurfaceCard className="max-w-none self-start" droppedShaddow>
          <div className="flex h-full flex-col gap-8 p-6">
            <div className="space-y-2">
              <Typography type="pageTitle">TMDB</Typography>
            </div>

            <SideMenu items={sideMenuItems} title={'Browse the app'} />
          </div>
        </SurfaceCard>

        <div className="grid min-h-0 gap-4">
          <SurfaceCard className="max-w-none" droppedShaddow>
            <Container align="end" padding="150">
              <div className="flex flex-wrap justify-end gap-3">
                <Toggle
                  aria-label="Toggle theme"
                  offIcon={<IconSun />}
                  onClick={toggleTheme}
                  onIcon={<IconMoon />}
                  pressed={resolvedTheme === 'dark'}
                />
                <Button
                  href={Routes.Login}
                  variant={pathname === Routes.Login ? 'secondary' : 'primary'}
                >
                  Login
                </Button>
              </div>
            </Container>
          </SurfaceCard>

          <SurfaceCard className="max-w-none" droppedShaddow>
            <div className="h-full p-6 sm:p-8">
              <Outlet />
            </div>
          </SurfaceCard>
        </div>
      </div>
    </main>
  );
};
