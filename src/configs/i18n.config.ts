import { Ti18nLocaleData } from '@types/i18n.types';
import { UKFlagIcon } from '@components/Icon/Flag/UKFlagIcon';
import { ByFlagIcon } from '@components/Icon/Flag/ByFlagIcon';
import { TAppLocale } from '@types/config.types';
import { DeFlagIcon } from '@components/Icon/Flag/DeFlagIcon';

export const i18nLocalesData: Record<TAppLocale, Ti18nLocaleData> = {
  en: {
    title: 'English',
    icon: UKFlagIcon,
    locale: 'en',
  },
  by: {
    title: 'Беларуская',
    icon: ByFlagIcon,
    locale: 'by',
  },
  de: {
    title: 'Deutsch',
    icon: DeFlagIcon,
    locale: 'de',
  },
};
