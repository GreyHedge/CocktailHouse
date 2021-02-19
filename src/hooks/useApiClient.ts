import {useContext} from 'react';
import {IApiClient} from '@data';
import {MainContext} from '../application';

export const useApiClient = (): IApiClient => {
  const {apiClient} = useContext(MainContext);

  return apiClient;
};
