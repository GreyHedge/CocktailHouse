import React from 'react';
import {ScrollView} from 'react-native'
import {Box} from '@components';
import {Menu, Info, Ingredients, Instructions} from './components';
import {mapCocktailDetails, ICocktailDetail, ICocktailDetailResponse} from '@data';
import {cocktailDetail, Colors} from '@constants';
import {CocktailScreenProps} from '@navigation';
import {useGetData} from '../../hooks';

export const CocktailScreen: React.FC<CocktailScreenProps> = ({
  route,
}) => {
  const {params: {id}} = route;
  const cocktail = useGetData<ICocktailDetail, ICocktailDetailResponse>(
    `${cocktailDetail}${id}`,
    mapCocktailDetails,
    'drinks',
  );

  if (!cocktail) {
    return null;
  }

  const {
    name,
    category,
    iba,
    glass,
    instructions,
    img,
    alcoholic,
    ingredients,
  } = cocktail;

  return (
    <Box backgroundColor={Colors.pink} flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Info
          name={name}
          img={{uri: img}}
          iba={iba}
          category={category}
          alcoholic={alcoholic}
          glass={glass}
        />
        <Ingredients ingredients={ingredients} />
        <Instructions
          instructions={instructions}
          glass={glass}
        />
      </ScrollView>
      <Menu />
    </Box>
  )
};

