import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {Colors, ESpacings} from '@constants';
import {CocktailCard, List} from '@components';
import {useGetFavoritesCocktails} from '@hooks';
import {ICocktail} from '@data';

const keyExtractor = (_: {isLoading: boolean; data: ICocktail | undefined}, index: number) => index.toString();

const handleRenderItem = (info: ListRenderItemInfo<{isLoading: boolean; data: ICocktail | undefined}>) => {
  const {item: {isLoading, data}} = info;

  if (isLoading || !data) {
    return null;
  }

  return (
    <CocktailCard
      cocktail={data}
      marginBottom={ESpacings.s16}
    />
  )
};

export const FavoriteListScreen: React.FC = () => {
  const favoriteCocktails = useGetFavoritesCocktails();

  return (
    <List
      title='Favorite cocktails'
      background={Colors.pink}
      items={favoriteCocktails}
      keyExtractor={keyExtractor}
      renderItem={handleRenderItem}
    />
  )
};
