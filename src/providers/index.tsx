import { ThemeProvider } from './theme.provider';
import { I18nProvider } from './i18n.provider';
import { AppStoreProvider } from './store.provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <AppStoreProvider>{children}</AppStoreProvider>
      </ThemeProvider>
    </I18nProvider>
  );
};
