import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f6f0"/>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.mainView}>
          <Text style={styles.title}>CocktailHouse</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f4f6f0',
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    color: '#002d40',
  },
});

export default App;
