import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {Typography} from '../../../components/Typography';
import {Box} from '../../../components/Box';
import {Colors, ESpacings} from '../../../constants';

export interface IIngredient {
  name: string;
  img: ImageSourcePropType;
  dose?: string;
  isLast?: boolean
}

export const Ingredient: React.FC<IIngredient> = ({
  name,
  img,
  dose,
  isLast = false,
}) => {
  return (
    <Box
      row
      marginBottom={ESpacings.s16}
      marginLeft={ESpacings.s8}
      alignItems="center"
      paddingRight={60}
      paddingBottom={ESpacings.s8}
      style={isLast ? null : styles.border}>
      <Image
        style={styles.ingredientImg}
        source={img}
        resizeMode="contain"
      />
      <Box justifyContent="center" flex={1}>
        <Typography h3 color={Colors.dark}>{name}</Typography>
        {dose && (
          <Typography
            body
            color={Colors.dark}>
            {dose}
          </Typography>
        )}
      </Box>
      <Typography
        h3
        color={Colors.dark}>
        &gt;
      </Typography>
    </Box>
  )
};

const styles = StyleSheet.create({
  ingredientImg: {
    height: 100,
    width: 100,
  },
  border: {
    borderBottomColor: Colors.dark,
    borderBottomWidth: 1,
  },
});
