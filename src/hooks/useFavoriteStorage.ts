import {useContext} from 'react';
import {MainContext} from './useApiClient';
import {IFavoriteStorage} from '@data';

export const useFavoriteStorage = (): IFavoriteStorage => {
  const {favoriteStorage} = useContext(MainContext);

  return favoriteStorage;
};
