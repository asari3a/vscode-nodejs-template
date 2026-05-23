import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    files: ['**/*.{js,mjs}'],
    rules: {
      'no-unused-vars': 'error',
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts}'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
);
