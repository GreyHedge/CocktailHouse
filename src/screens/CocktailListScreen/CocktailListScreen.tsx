import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {CocktailCard, Loader, List} from '@components';
import {ICocktail, ICocktailResponse, mapCocktailList} from '@data';
import {Colors, ESpacings, EQueryKeys} from '@constants';
import {CocktailListScreenProps} from '@navigation';
import {getCocktails} from './helpers';
import {useGetArrayData} from '@hooks';

const keyExtractor = (item: ICocktail) => item.id;

const handleRenderItem = (info: ListRenderItemInfo<ICocktail>) => {
  return (
    <CocktailCard
      cocktail={info.item}
      marginBottom={ESpacings.s16}
    />
  )
};

export const CocktailListScreen: React.FC<CocktailListScreenProps> = ({
  route,
}) => {
  const {params: {title = '', queryString, filter}} = route;
  const {data: cocktailList, isLoading} = useGetArrayData<ICocktail, ICocktailResponse>(
    `${EQueryKeys.COCKTAIL_LIST} ${filter} ${queryString}`,
    getCocktails(filter, queryString),
    mapCocktailList,
    true,
  );

  return (
    <List
      title={title}
      items={cocktailList}
      renderItem={handleRenderItem}
      keyExtractor={keyExtractor}>
      {isLoading && (
        <Loader color={Colors.ice} />
      )}
    </List>
  )
};

