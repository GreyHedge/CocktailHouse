import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Colors} from './src/constants'
import {CocktailScreen} from './src/screens/CocktailScreen';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f6f0"/>
      <SafeAreaView style={styles.wrapper}>
        <CocktailScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default App;
