import React from 'react';
import {QueryClientProvider} from 'react-query';
import {IDependencies, initDependencies} from './initDependencies';
import {MainContext} from './mainContext';
import {App} from './App';

const getMainContainer = (dependencies: IDependencies) => {

  const MainContainer: React.FC = () => {
    const {
      apiClient,
      favoriteStorage,
      queryClient,
    } = dependencies;
    return (
      <MainContext.Provider value={{apiClient, favoriteStorage}}>
        <QueryClientProvider client={queryClient}>
          <App/>
        </QueryClientProvider>
      </MainContext.Provider>
    )
  };

  return MainContainer;
};

export const init = async(): Promise<React.FC> => {
  const dependencies = await initDependencies();
  return getMainContainer(dependencies);
};
