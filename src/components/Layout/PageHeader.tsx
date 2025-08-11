import { Link } from '@libs/i18n.lib';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@components/LanguageSwitcher/LanguageSwitcher';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';

export const HeaderLayout = () => {
  const t = useTranslations('app');

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-2">
          {t('name')}
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/blog/hello">
            {t('navigation.public.page')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contacts">
            {t('navigation.public.section')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="/user/">
            {t('navigation.private')}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href={'/user/login'}>Login</Link>
        </NavbarItem>
        <NavbarItem>xxx</NavbarItem>
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
