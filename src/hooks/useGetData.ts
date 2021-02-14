import {useEffect} from 'react';
import {useQuery,} from 'react-query';
import {IMapFn, IResponse} from '@data';
import {useApiClient} from './index';

export const useGetData = <T,U>(
  queryKey: string,
  url: string,
  mapFn: IMapFn<T,U>,
  key: keyof IResponse<T>,
): {data: T | undefined; isLoading: boolean;} => {
  const apiClient = useApiClient();
  const source = apiClient.source();
  const getData = async() => {
    try {
      const response = await apiClient.get<IResponse<U[]>>(url, source.token);
      return mapFn(response.data[key][0]);
    } catch (error) {
      console.error(error);
    }
  };

  const {data, isLoading} = useQuery(queryKey, getData, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  useEffect(() => {
    getData();
    return () => {
      source.cancel('component unmount');
    }
  }, []);

  return {
    data,
    isLoading,
  };
};
