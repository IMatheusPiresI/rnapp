module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-uses-react': 1,
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unescaped-entities': 0,
  },
};
