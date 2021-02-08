import {useEffect, useState} from 'react';
import {IMapFn, IResponse} from '@data';
import {useApiClient} from './index';

export const useGetData = <T,U>(url: string, mapFn: IMapFn<T,U>,  key: keyof IResponse<T>): T | null => {
  const [data, setData] = useState<T | null>(null);
  const apiClient = useApiClient();
  const getData = async() => {
    try {
      const response = await apiClient.get<IResponse<U[]>>(url);
      setData(mapFn(response.data[key][0]));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
