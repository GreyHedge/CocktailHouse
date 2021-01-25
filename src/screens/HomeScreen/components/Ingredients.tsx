import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';
import {Box, IngredientCard, RectButton, Typography} from '@components';
import {Colors, ERounding, ESpacings} from '@constants';
import {IIngredient, mapIngredients} from '@data';

export const Ingredients: React.FC = () => {
  const [ingredients, setIngredients] = useState<IIngredient[] | null>(null);

  useEffect(() => {
    async function getIngredients() {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
        setIngredients(mapIngredients(response.data.drinks));
      } catch (error) {
        console.error(error);
      }
    }
    getIngredients();
  }, []);

  if (!ingredients) {
    return null;
  }

  return (
    <>
      <Box
        row
        justifyContent="space-between"
        alignItems="center"
        marginHorizontal={ESpacings.s16}
        marginVertical={ESpacings.s16}>
        <Typography
          h1
          color={Colors.dark}
          marginVertical={ESpacings.s16}>
          Ingredients
        </Typography>
        <RectButton
          border
          text="See more"
          icon="doubleright"
          onPress={() => {console.log('see more pressed')}}
        />
      </Box>
      <ScrollView
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {ingredients.slice(0, 5).map((ingredient) => (
          <IngredientCard
            key={ingredient.name}
            ingredient={ingredient}
            onPress={() => {console.log('pressed', ingredient.name)}}
          />
        ))}
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: ESpacings.s16,
    marginBottom: ESpacings.s24,
  },
  button: {
    borderColor: Colors.dark,
    borderWidth: 1,
    borderRadius: ERounding.r8,
    overflow: 'hidden',
  },
});
