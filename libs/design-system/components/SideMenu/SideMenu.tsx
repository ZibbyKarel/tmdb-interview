import { Button, Container, Stack, Typography } from '@ds';
import type * as React from 'react';
import type { HTMLAttributes } from 'react';

export interface SideMenuItem {
  href: string;
  isActive?: boolean;
  label: string;
}

export interface SideMenuProps extends HTMLAttributes<HTMLElement> {
  items: SideMenuItem[];
  title?: string;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  items,
  title,
  ...props
}) => {
  return (
    <nav {...props}>
      {title ? (
        <div className="mb-4">
          <Typography type="note" variant="secondary">
            {title}
          </Typography>
        </div>
      ) : null}

      <Stack vertical spacing="50">
        {items.map((item) => (
          <Button
            key={item.href}
            fullWidth
            href={item.href}
            variant={item.isActive ? 'primary' : 'tertiary'}
          >
            <Container align="begin">{item.label}</Container>
          </Button>
        ))}
      </Stack>
    </nav>
  );
};
