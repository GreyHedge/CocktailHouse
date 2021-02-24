import React from 'react';
import {StyleSheet} from 'react-native';
import {Ingredient} from './Ingredient'
import {Box, Typography} from '@components';
import {Colors, ERounding, ESpacings} from '@constants';
import {ICocktailIngredient} from '@data';
import {commonStyles, getSmallIngredientImageUrl} from '@helpers';

interface IProps {
  ingredients: ICocktailIngredient[];
}

export const Ingredients: React.FC<IProps> = React.memo(({ingredients}) => {
  return (
    <Box
      alignItems="flex-end"
      style={[styles.container, commonStyles.shadowLeft]}>
      <Box
        backgroundColor={Colors.ice}
        width="80%"
        marginTop={-100}
        paddingTop={100}
        borderTopLeftRadius={ERounding.r24}
        borderBottomLeftRadius={ERounding.r24}>
        <Typography
          h2
          merienda
          center
          color={Colors.dark}
          marginVertical={ESpacings.s16}>
          Ingredients
        </Typography>
        {ingredients.map((ingredient, index) => {
          const {name, value} = ingredient;
          return (
            <Ingredient
              key={name}
              name={name}
              img={{uri: getSmallIngredientImageUrl(name)}}
              dose={value}
              isLast={ingredients.length - 1 === index}
            />
          )
        })}
      </Box>
    </Box>
  )
});

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    zIndex: 8,
  },
});
