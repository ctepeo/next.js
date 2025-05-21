import { ThemeProvider } from './theme.provider';
import { I18nProvider } from './i18n.provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </I18nProvider>
  );
};
