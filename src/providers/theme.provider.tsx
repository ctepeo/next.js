'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { HeroUIProvider } from '@heroui/system';
import { useRouter } from 'next/navigation';

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>;
  }
}
export const ThemeProvider = ({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) => {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
};
