import React from 'react';
import {ScrollView} from 'react-native'
import {Colors, ERounding, ESpacings} from '../../constants';
import {Box, Typography} from '../../components';
import {Ingredient, Instructions, Buttons, Info} from './components';

export const CocktailScreen: React.FC = () => {
  return (
    <Box backgroundColor={Colors.pink} flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Info
          name="Margarita"
          img={require('../../../assets/images/margarita.jpg')}
          iba="Contemporary Classic"
        />
        <Box alignItems="flex-end" style={{elevation: 8, zIndex: 8}}>
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
            <Ingredient name="Tequila" img={require('../../../assets/images/ingredient1.png')} dose="1 1/2 oz" />
            <Ingredient name="Triple sec" img={require('../../../assets/images/ingredient2.png')} dose="1/2 oz" />
            <Ingredient name="Lime juice" img={require('../../../assets/images/ingredient3.png')} dose="1 oz" />
            <Ingredient name="Salt" img={require('../../../assets/images/ingredient4.png')} isLast/>
          </Box>
        </Box>
        <Instructions
          instructions="Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass."
          glass="Cocktail glass"
        />
      </ScrollView>
      <Buttons />
    </Box>
  )
};

