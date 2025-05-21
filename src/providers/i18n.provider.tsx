import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';

export const I18nProvider = async ({ children }: { children: ReactNode }) => {
  // Read messages configured via `i18n/request.ts`
  const messages = await getMessages();

  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
};
