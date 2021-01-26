import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '@constants'
import {HomeStack} from '@navigation';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f6f0"/>
      <SafeAreaView style={styles.wrapper}>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
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
