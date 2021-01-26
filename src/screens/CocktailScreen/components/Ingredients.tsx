import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Ingredient} from './Ingredient'
import {Box, Typography} from '@components';
import {Colors, ERounding, ESpacings} from '@constants';
import {ICocktailIngredient} from '@data';
import {commonStyles} from '@helpers';
import {EScreens} from "@navigation";

interface IProps {
  ingredients: ICocktailIngredient[];
}

export const Ingredients: React.FC<IProps> = ({ingredients}) => {
  const {navigate} = useNavigation();
  const handleIngredientPress = useCallback((name: string) => {
    navigate(EScreens.INGREDIENT_SCREEN, {name})
  }, []);

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
              img={{uri: `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`}}
              dose={value}
              isLast={ingredients.length - 1 === index}
              onPress={handleIngredientPress}
            />
          )
        })}
      </Box>
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    zIndex: 8,
  },
});
