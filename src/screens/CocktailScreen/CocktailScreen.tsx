import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native'
import axios from 'axios';
import {Box} from '@components';
import {Menu, Info, Ingredients, Instructions} from './components';
import {mapCocktailDetails, ICocktailDetail} from '@data';
import {Colors} from '@constants';
import {CocktailScreenProps} from '@navigation';

export const CocktailScreen: React.FC<CocktailScreenProps> = ({
  navigation,
  route,
}) => {
  const {params: {id}} = route;
  const [cocktail, setCocktail] = useState<ICocktailDetail | null>(null);
  const handleClosePress = useCallback(() => {
    navigation.goBack();
  }, []);

  useEffect(() => {
    async function getCocktail(id: string) {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        setCocktail(mapCocktailDetails(response.data.drinks[0]));
      } catch (error) {
        console.error(error);
      }
    }
    getCocktail(id);
  }, []);

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
    isAlcohol,
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
          isAlcohol={isAlcohol}
          glass={glass}
        />
        <Ingredients ingredients={ingredients} />
        <Instructions
          instructions={instructions}
          glass={glass}
        />
      </ScrollView>
      <Menu onClosePress={handleClosePress}/>
    </Box>
  )
};

