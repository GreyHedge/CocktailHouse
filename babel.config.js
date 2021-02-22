module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components/index.ts',
          '@constants': './src/constants/index.ts',
          '@helpers': './src/helpers/index.ts',
          '@screens': './src/screens/index.ts',
          '@navigation': './src/navigation/index.ts',
          '@data': './src/data/index.ts',
          '@hooks': './src/hooks/index.ts',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
