import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Button} from './Button';
import {Typography} from './Typography';
import {Box} from './Box';
import {IIngredient} from '@data';
import {Colors, ERounding, ESpacings, ImageSize} from '@constants';
import {commonStyles} from '@helpers';

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
    <Box borderRadius={ERounding.r8} style={commonStyles.shadowRight}>
      <Box
        flex={1}
        marginRight={ESpacings.s8}
        borderRadius={ERounding.r8}
        style={commonStyles.noOverflow}>
        <Button
          onPress={onPress}
          style={styles.button}>
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
    </Box>
  )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.ice,
  },
  img: {
    height: ImageSize.S,
    width: ImageSize.S,
    alignSelf: 'center',
  },
});
