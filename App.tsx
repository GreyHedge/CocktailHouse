import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Colors} from '@constants'
import {CocktailScreen} from '@screens';

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
