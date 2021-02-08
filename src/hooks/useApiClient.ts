import {createContext, useContext} from 'react';
import {ApiClient, IApiClient} from "../data/apiClient/apiClient";
import {baseUrl} from "@constants";

export const apiClient: IApiClient = new ApiClient({
  baseURL: baseUrl,
  timeout: 5000,
});

export const MainContext = createContext<{apiClient: IApiClient}>({apiClient});

export const useApiClient = (): IApiClient => {
  const {apiClient} = useContext(MainContext);

  return apiClient;
};
