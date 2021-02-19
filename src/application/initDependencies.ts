import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryClient} from 'react-query';
import {ApiClient, FavoriteStorage, IApiClient, IFavoriteStorage} from '@data';
import {baseUrl} from '@constants';

export interface IDependencies {
  queryClient: QueryClient;
  apiClient: IApiClient;
  favoriteStorage: IFavoriteStorage;
}

export const initDependencies = async(): Promise<IDependencies> => {
  const apiClient: IApiClient = new ApiClient({
    baseURL: baseUrl,
    timeout: 5000,
  });
  const savedFavorites = await AsyncStorage.getAllKeys();
  const favoriteStorage = new FavoriteStorage(AsyncStorage, savedFavorites);
  const queryClient = new QueryClient();

  return {
    apiClient,
    favoriteStorage,
    queryClient,
  };
};
