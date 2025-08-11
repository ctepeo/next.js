'use client';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@libs/i18n.lib';
import { i18nLocalesData } from '@configs/i18n.config';
import { Ti18nLocaleData } from '@types/i18n.types';
import { FC } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from '@heroui/dropdown';
import { Button } from '@heroui/button';
import { appConfig } from '@configs/app.config';

export const LanguageSwitcher = () => {
  const iconClasses = 'text-xl text-default-500 pointer-events-none flex-shrink-0';
  const locale: string = useLocale();
  const pathname: string = usePathname();
  const currentLocale: Ti18nLocaleData = i18nLocalesData[locale];
  const CurrentLocaleComponent: FC<{ className: string }> = currentLocale.icon;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className={'px-0 gap-0 min-w-10'} variant="light" startContent={<CurrentLocaleComponent className={iconClasses} />}></Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" variant="light">
        {appConfig.supportedLocales.map((localeId: string) => {
          const localeData: Ti18nLocaleData = i18nLocalesData[localeId];
          const LocaleIcon: FC<{ className: string }> = localeData.icon;
          return (
            <DropdownItem key={localeId} startContent={<LocaleIcon className={iconClasses} />}>
              <Link href={pathname} locale={localeId}>
                {localeData.title}
              </Link>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};
