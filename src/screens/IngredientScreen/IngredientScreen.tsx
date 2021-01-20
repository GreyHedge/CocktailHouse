import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import {Box} from '../../components';
import {NameAndTags, Menu, Description} from './components';
import {mapIngredient} from '../../data/helpers';
import {IIngredientDetail} from '../../data/types';
import {Colors} from '../../constants';

export const IngredientScreen: React.FC = () => {
  const [ingredient, setIngredient] = useState<IIngredientDetail | null>(null);

  useEffect(() => {
    async function getCocktail(name: string) {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`);
        setIngredient(mapIngredient(response.data.ingredients[0]));
      } catch (error) {
        console.error(error);
      }
    }
    getCocktail('Tequila');
  }, []);

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
      <Menu />
    </Box>
  )
};
