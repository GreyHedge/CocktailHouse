import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {IngredientListScreenProps} from '@navigation';
import {IngredientCard, Loader, List} from '@components';
import {allIngredients, Colors, ESpacings, roundButtonsWidth, EQueryKeys} from '@constants';
import {IIngredient, IIngredientResponse, mapIngredients} from '@data';
import {width} from '@helpers';
import {useGetArrayData} from '@hooks';

const cardWidth = (width - roundButtonsWidth - ESpacings.s16 * 2 - ESpacings.s8) / 2;

const renderIngredient = (info: ListRenderItemInfo<IIngredient>) => {
  return (
    <IngredientCard
      width={cardWidth}
      ingredient={info.item}
      marginBottom={ESpacings.s8}
    />
  )
};

const keyExtractor = (item: IIngredient) => item.name;

export const IngredientListScreen: React.FC<IngredientListScreenProps> = React.memo(() => {
  const {data: ingredients, isLoading} = useGetArrayData<IIngredient, IIngredientResponse>(
    EQueryKeys.ALL_INGREDIENTS,
    allIngredients,
    mapIngredients,
    true,
  );

  return (
    <List
      title="Ingredients"
      items={ingredients}
      numColumns={2}
      renderItem={renderIngredient}
      keyExtractor={keyExtractor}>
      {isLoading && (
        <Loader color={Colors.ice} />
      )}
    </List>
  )
});
