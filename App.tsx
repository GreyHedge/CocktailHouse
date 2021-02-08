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
import {apiClient, MainContext} from './src/hooks';

const App: React.FC = () => {
  return (
    <MainContext.Provider value={{apiClient}}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f6f0"/>
      <SafeAreaView style={styles.wrapper}>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </SafeAreaView>
    </MainContext.Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default App;
