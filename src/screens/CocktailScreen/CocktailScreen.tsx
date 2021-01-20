import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native'
import axios from 'axios';
import {Box} from '../../components';
import {Menu, Info, Ingredients, Instructions} from './components';
import {mapCocktail} from '../../data/helpers';
import {ICocktail} from '../../data/types';
import {Colors} from '../../constants';

export const CocktailScreen: React.FC = () => {
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);

  useEffect(() => {
    async function getCocktail(id: number) {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        setCocktail(mapCocktail(response.data.drinks[0]));
      } catch (error) {
        console.error(error);
      }
    }
    getCocktail(11007);
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
      <Menu />
    </Box>
  )
};

