import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {HomeStack} from '@navigation';
import {apiClient, MainContext} from '@hooks';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <MainContext.Provider value={{apiClient}}>
      <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <HomeStack />
          </NavigationContainer>
      </QueryClientProvider>
    </MainContext.Provider>
  );
};

export default App;
