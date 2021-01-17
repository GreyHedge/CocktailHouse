import React from 'react';
import {StyleSheet} from 'react-native';
import {Ingredient, IIngredient} from './Ingredient'
import {Box, Typography} from '../../../components';
import {Colors, ERounding, ESpacings} from '../../../constants';

interface IProps {
  ingredients: IIngredient[];
}

export const Ingredients: React.FC<IProps> = ({ingredients}) => {
  return (
    <Box
      alignItems="flex-end"
      style={styles.container}>
      <Box
        backgroundColor={Colors.ice}
        width="80%"
        marginTop={-100}
        paddingTop={100}
        borderTopLeftRadius={ERounding.r32}
        borderBottomLeftRadius={ERounding.r32}>
        <Typography
          h2
          center
          color={Colors.dark}
          marginVertical={ESpacings.s16}>
          Ingredients
        </Typography>
        {ingredients.map((ingredient) => {
          const {name, img, dose} = ingredient;
          return (
            <Ingredient
              key={name}
              name={name}
              img={img}
              dose={dose}
            />
          )
        })}
      </Box>
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    elevation: 8,
    zIndex: 8,
  },
});
