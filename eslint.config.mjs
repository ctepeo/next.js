import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// @ts-check

import pluginNext from '@next/eslint-plugin-next';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: __dirname,
});

export default tseslint.config(
  eslint.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintConfigPrettier,
  {
    ignores: ['node_modules', 'build', 'coverage', 'test-reports'],
  },
  {
    rules: {
      'max-len': ['error', { code: 200 }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'all',
          ignoreRestSiblings: false,
          reportUsedIgnorePattern: false,
          varsIgnorePattern: '^_', // Ignore unused variables starting with an underscore
          argsIgnorePattern: '^_', // Ignore unused function arguments starting with an underscore
        },
      ],
      '@typescript-eslint/no-extraneous-class': 'off',
    },
  },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@next/next': pluginNext,
    },
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  }),
);
