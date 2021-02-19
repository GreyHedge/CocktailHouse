import {useContext} from 'react';
import {IFavoriteStorage} from '@data';
import {MainContext} from '../application';

export const useFavoriteStorage = (): IFavoriteStorage => {
  const {favoriteStorage} = useContext(MainContext);

  return favoriteStorage;
};
