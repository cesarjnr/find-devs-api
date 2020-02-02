module.exports = {
  env: {
    browser: true,
    es6: true,
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
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never' }
   ],
   '@typescript-eslint/camelcase': [
     'error',
     { properties: 'never'}
    ]
  },
};
