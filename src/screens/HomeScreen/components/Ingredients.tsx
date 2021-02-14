import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Box, IngredientCard, RectButton, Typography} from '@components';
import {allIngredients, Colors, EQueryKeys, ERounding, ESpacings} from '@constants';
import {IIngredient, IIngredientResponse, mapIngredients} from '@data';
import {useGetArrayData} from '@hooks';

const numberOfIngredients = 5;

interface IProps {
  onMorePress: () => void;
}

export const Ingredients: React.FC<IProps> = ({onMorePress}) => {
  const {data: ingredients} = useGetArrayData<IIngredient, IIngredientResponse>(
    EQueryKeys.ALL_INGREDIENTS,
    allIngredients,
    mapIngredients,
    true,
  );

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
          onPress={onMorePress}
        />
      </Box>
      <ScrollView
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {ingredients.slice(0, numberOfIngredients).map((ingredient) => (
          <IngredientCard
            key={ingredient.name}
            ingredient={ingredient}
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
