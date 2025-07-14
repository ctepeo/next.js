import { ThemeProvider } from '@/providers/theme.provider';
import { I18nProvider } from '@/providers/i18n.provider';
import { AppStoreProvider } from '@/providers/store.provider';
import { SwrProvider } from '@providers/swr.provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SwrProvider>
      <I18nProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AppStoreProvider>{children}</AppStoreProvider>
        </ThemeProvider>
      </I18nProvider>
    </SwrProvider>
  );
};
