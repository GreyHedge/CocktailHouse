import {createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '@constants';
import {ApiClient, FavoriteStorage, IApiClient} from '@data';
import {IMainContext} from '../application';

export const apiClient: IApiClient = new ApiClient({
  baseURL: baseUrl,
  timeout: 5000,
});

const favoriteStorage = new FavoriteStorage(AsyncStorage);

export const MainContext = createContext<IMainContext>({apiClient, favoriteStorage});

export const useApiClient = (): IApiClient => {
  const {apiClient} = useContext(MainContext);

  return apiClient;
};
