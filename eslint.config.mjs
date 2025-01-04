import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'], // Apply to TypeScript files
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,ts}'], // General rules for JS/TS files
    ignores: ['node_modules', 'dist'],
  },
  eslintPluginPrettier,
];
