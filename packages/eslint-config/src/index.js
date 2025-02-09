const { CODE_FILE, TS_FILE } = require('./constants.js');

require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    '!.*', // Don't ignore dot-files because by default ESLint ignore dot-files (except for .eslintrc.*) and dot-folders
    '.git',
  ],
  overrides: [
    {
      files: CODE_FILE,
      extends: './base',
    },
    {
      files: TS_FILE,
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'error',
      },
    },
    {
      files: ['*.c{j,t}s'],
      env: { node: true },
      rules: { '@typescript-eslint/no-var-requires': 'off' },
    },
    {
      files: [
        'jest.config.js',
        'webpack.config.js',
        'bob.config.js',
        'babel.config.js',
        'postcss.config.{js,cjs}',
        'rollup.config.js',
      ],
      env: { node: true },
    },
    {
      files: ['*.{spec,test}.*'],
      env: { jest: true },
      rules: { 'import/extensions': ['error', 'never'] },
    },
    {
      files: [
        'vite.config.ts',
        'jest.config.js',
        '*.d.ts',
        'website/theme.config.tsx',
        'tsup.config.ts',
        'postcss.config.ts',
        'tailwind.config.ts',
      ],
      rules: { 'import/no-default-export': 'off' },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'no-var': 'off',
      },
    },
  ],
};
