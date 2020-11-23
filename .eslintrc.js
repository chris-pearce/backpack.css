module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    // NOTE: This has to come last
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    impliedStrict: true,
    sourceType: 'module',
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 80,
        comments: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
};
