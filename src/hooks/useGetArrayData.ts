import {useEffect, useState} from 'react';
import {useApiClient} from './useApiClient';
import {IMapArrayFn, IResponse} from '@data';

export const useGetArrayData = <T,U>(url: string, mapArrayFn: IMapArrayFn<T,U>): T[] | null => {
  const [data, setData] = useState<T[] | null>(null);
  const apiClient = useApiClient();
  const getData = async() => {
    try {
      const response = await apiClient.get<IResponse<U[]>>(url);
      setData(mapArrayFn(response.data.drinks));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
