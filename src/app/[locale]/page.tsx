import { useTranslations } from 'next-intl';
import { Usable, use } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { TAppRequestParams } from '@/types/request.types';
import { Test } from '@/components/Test';

export async function generateMetadata({ params }: { params: Promise<TAppRequestParams> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });

  return {
    title: t('hello'),
  };
}

export default function Home({ params }: { params: TAppRequestParams }) {
  const { locale } = use(params as unknown as Usable<TAppRequestParams>);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('common');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2>{t('hello')}</h2>
        <Test />
      </main>
    </div>
  );
}
