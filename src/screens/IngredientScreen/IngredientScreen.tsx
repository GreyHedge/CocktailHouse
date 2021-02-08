import React from 'react';
import {ScrollView} from 'react-native';
import {Box, SmallMenu} from '@components';
import {NameAndTags, Description} from './components';
import {mapIngredientDetail, IIngredientDetail, IIngredientDetailResponse} from '@data';
import {Colors, ingredientDetail} from '@constants';
import {IngredientScreenProps} from '@navigation';
import {useGetData} from '../../hooks';

export const IngredientScreen: React.FC<IngredientScreenProps> = ({
  route,
}) => {
  const {params: {name: ingredientName}} = route;
  const ingredient = useGetData<IIngredientDetail, IIngredientDetailResponse>(
    `${ingredientDetail}${ingredientName}`,
    mapIngredientDetail,
    'ingredients',
  );

  if (!ingredient) {
    return null;
  }

  const {
    name,
    description,
    type,
    isAlcohol,
    abv,
  } = ingredient;

  return (
    <Box
      backgroundColor={Colors.ice}
      flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NameAndTags
          name={name}
          type={type}
          isAlcohol={isAlcohol}
          abv={abv}
        />
        <Description
          name={name}
          description={description}
        />
      </ScrollView>
      <SmallMenu />
    </Box>
  )
};
