import { TFontConfig } from '@/types/config.types';

export const fontsConfig: Record<string, TFontConfig> = {
  // Add any other font configurations you need
  sans: {
    name: 'Geist',
    variable: '--font-geist-sans',
    subsets: ['latin'],
  },
  mono: {
    name: 'Geist_Mono',
    variable: '--font-geist-mono',
    subsets: ['latin'],
  },
};

export const fontAntialiasing: () => boolean = () => {
  return true;
};

export const fontClassNames: () => string = () => {
  const classNames = Object.keys(fontsConfig)
    .map((key: string) => {
      const font = fontsConfig[key];
      return `${font.name}(${font.variable})`;
    })
    .join(' ');

  return `${classNames}${fontAntialiasing() ? ' antialiased' : ''}`;
};
