import {useEffect} from 'react';
import {useQueries} from 'react-query';
import {UseQueryResult} from 'react-query/types/react/types';
import {useFavoriteStorage} from './useFavoriteStorage';
import {useApiClient} from './useApiClient';
import {ICocktailDetailResponse, IResponse, mapCocktailDetails} from '@data';
import {cocktailDetail, EQueryKeys} from '@constants';

export const useGetFavoritesCocktails = (): UseQueryResult[] => {
  const {getAllItems} = useFavoriteStorage();
  const favoriteIds = getAllItems();
  const apiClient = useApiClient();
  const source = apiClient.source();

  const getData = async(id: string) => {
    try {
      const response = await apiClient.get<IResponse<ICocktailDetailResponse[]>>(
        `${cocktailDetail}${id}`,
        source.token,
      );
      return mapCocktailDetails(response.data.drinks[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    return () => {
      source.cancel('component unmount')
    }
  }, []);

  return useQueries(favoriteIds.map((id: string) => ({
    queryKey: `${EQueryKeys.COCKTAIL_DETAIL} ${id}`,
    queryFn: async() => await getData(id),
    staleTime: Infinity,
    cacheTime: Infinity,
  })));
};
