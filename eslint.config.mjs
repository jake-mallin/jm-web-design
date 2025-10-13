// eslint.config.mjs — Next.js + TS + Tailwind v4 friendly (ESLint v9 flat config)

import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'
import prettier from 'eslint-config-prettier'

export default [
  // 1) Files to ignore (replaces .eslintignore)
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'coverage/**', '**/*.config.*', '**/*.d.ts'],
  },

  // 2) Base JS + TS recommended
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3) Project rules
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      import: importPlugin,
      'unused-imports': unusedImports,
      'jsx-a11y': jsxA11y,
    },
    settings: {
      react: { version: 'detect' },
      // So import/order & no-unresolved handle "@/..." paths
      'import/resolver': {
        typescript: {},
        node: true,
      },
    },
    rules: {
      // --- TS ---
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      '@typescript-eslint/no-unused-vars': 'off', // handled by unused-imports

      // --- Unused imports/vars ---
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],

      // --- React / Next ---
      'react/react-in-jsx-scope': 'off', // Next.js uses the new JSX transform
      'react/jsx-uses-react': 'off',

      // --- Hooks ---
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // --- Import hygiene & ordering ---
      'import/no-unresolved': 'off', // TS handles this
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index'], ['type']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: 'next/**', group: 'external', position: 'before' },
            { pattern: '@/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['react', 'next/**'],
        },
      ],
    },
  },

  // 4) Keep formatting to Prettier
  prettier,
]
