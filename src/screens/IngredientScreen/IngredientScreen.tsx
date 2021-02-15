import React from 'react';
import {ScrollView} from 'react-native';
import {ScreenWrapper, Loader} from '@components';
import {NameAndTags, Description} from './components';
import {mapIngredientDetail, IIngredientDetail, IIngredientDetailResponse, EResponseField} from '@data';
import {Colors, ingredientDetail, EQueryKeys} from '@constants';
import {IngredientScreenProps} from '@navigation';
import {useGetData} from '@hooks';

export const IngredientScreen: React.FC<IngredientScreenProps> = ({
  route,
}) => {
  const {params: {name: ingredientName}} = route;
  const {data: ingredient, isLoading} = useGetData<IIngredientDetail, IIngredientDetailResponse>(
    `${EQueryKeys.INGREDIENT_DETAIL} ${ingredientName}`,
    `${ingredientDetail}${ingredientName}`,
    mapIngredientDetail,
    EResponseField.INGREDIENTS,
  );

  return (
    <ScreenWrapper color={Colors.ice}>
      {isLoading && (
        <Loader color={Colors.dark} />
      )}
      {!!ingredient && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <NameAndTags
            name={ingredient.name}
            type={ingredient.type}
            isAlcohol={ingredient.isAlcohol}
            abv={ingredient.abv}
          />
          <Description
            name={ingredient.name}
            description={ingredient.description}
          />
        </ScrollView>
      )}
    </ScreenWrapper>
  )
};
