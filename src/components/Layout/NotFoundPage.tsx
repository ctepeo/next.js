import { useTranslations } from 'next-intl';
import PageLayout from '@components/Layout/PageLayout';

export default function NotFoundPage() {
  const t = useTranslations('app.page.404');

  return (
    <PageLayout title={t('title')}>
      <p className="max-w-[460px]">{t('description')}</p>
    </PageLayout>
  );
}
