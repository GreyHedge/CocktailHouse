import React from 'react';
import {ScrollView} from 'react-native'
import {Box, Loader} from '@components';
import {Menu, Info, Ingredients, Instructions} from './components';
import {mapCocktailDetails, ICocktailDetail, ICocktailDetailResponse, EResponseField} from '@data';
import {cocktailDetail, Colors, EQueryKeys} from '@constants';
import {CocktailScreenProps} from '@navigation';
import {useGetData} from '@hooks';

export const CocktailScreen: React.FC<CocktailScreenProps> = ({
  route,
}) => {
  const {params: {id}} = route;
  const {data: cocktail, isLoading} = useGetData<ICocktailDetail, ICocktailDetailResponse>(
    `${EQueryKeys.COCKTAIL_DETAIL} ${id}`,
    `${cocktailDetail}${id}`,
    mapCocktailDetails,
    EResponseField.DRINKS,
  );

  return (
    <Box backgroundColor={Colors.pink} flex={1}>
      {isLoading && (
        <Loader color={Colors.dark} />
      )}
      {!!cocktail && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Info
            name={cocktail.name}
            img={{uri: cocktail.img}}
            iba={cocktail.iba}
            category={cocktail.category}
            alcoholic={cocktail.alcoholic}
            glass={cocktail.glass}
          />
          <Ingredients ingredients={cocktail.ingredients} />
          <Instructions
            instructions={cocktail.instructions}
            glass={cocktail.glass}
          />
        </ScrollView>
      )}
      <Menu />
    </Box>
  )
};

