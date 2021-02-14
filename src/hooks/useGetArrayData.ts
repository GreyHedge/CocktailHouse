import {useEffect} from 'react';
import {useQuery,} from 'react-query';
import {useApiClient} from './useApiClient';
import {IMapArrayFn, IResponse} from '@data';

export const useGetArrayData = <T,U>(
  queryKey: string,
  url: string,
  mapArrayFn: IMapArrayFn<T,U>,
  cache?: boolean,
): {data: T[] | undefined; isLoading: boolean;} => {
  const apiClient = useApiClient();
  const source = apiClient.source();
  const getData = async() => {
    try {
      const response = await apiClient.get<IResponse<U[]>>(url, source.token);
      return mapArrayFn(response.data.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  const {data, isLoading} = useQuery(queryKey, getData, {
    staleTime: cache ? Infinity : 0,
    cacheTime: cache ? Infinity: 0,
  });

  useEffect(() => {
    return () => {
      source.cancel('component unmount')
    }
  }, []);

  return {
    data,
    isLoading,
  };
};
