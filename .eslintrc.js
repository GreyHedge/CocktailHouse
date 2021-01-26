module.exports = {
  root: true,
  extends: '@react-native-community',
};
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components/index.ts'],
          ['@constants', './src/constants/index.ts'],
          ['@helpers', './src/helpers/index.ts'],
          ['@screens', './src/screens/index.ts'],
          ['@navigation', './src/navigation/index.ts'],
          ['@data', './src/data/index.ts'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};
