import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/@heroui/theme/dist/components/(button|dropdown|navbar|ripple|spinner|menu|divider|popover).js'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [heroui()],
};
