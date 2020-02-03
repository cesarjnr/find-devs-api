module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts']
      }
    },
  },
  rules: {
    'max-len': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never' }
   ],
   '@typescript-eslint/camelcase': 'off'
  },
};
