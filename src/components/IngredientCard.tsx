import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Button} from './Button';
import {Typography} from './Typography';
import {Box} from './Box';
import {IIngredient} from '@data';
import {Colors, ERounding, ESpacings, ImageSize} from '@constants';

interface IProps {
  ingredient: IIngredient;
  onPress: () => void;
}

export const IngredientCard: React.FC<IProps> = ({
  ingredient,
  onPress,
}) => {
  const {name} = ingredient;

  return (
    <Box
      flex={1}
      marginRight={ESpacings.s8}
      backgroundColor={Colors.ice}
      borderRadius={ERounding.r8}
      style={styles.container}>
      <Button onPress={onPress}>
        <Box paddingVertical={ESpacings.s8}>
          <Image
            source={{uri: `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`}}
            style={styles.img}
            resizeMode="contain"
          />
          <Typography
            h2
            center
            paddingHorizontal={ESpacings.s8}
            color={Colors.dark}>
            {name}
          </Typography>
        </Box>
      </Button>
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  img: {
    height: ImageSize.S,
    width: ImageSize.S,
    alignSelf: 'center',
  },
});
