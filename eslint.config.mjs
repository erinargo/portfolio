import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next'],
    env: {
      browser: true,
    },
    globals: {
      window: 'readonly',
      document: 'readonly',
    },
  }),
];

export default eslintConfig;
