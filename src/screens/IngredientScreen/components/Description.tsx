import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Typography} from '@components';
import {Colors, ERounding, ESpacings, ingredientImgSize} from '@constants';
import {commonStyles, width} from '@helpers';

interface IProps {
  name: string;
  description: string | null;
}

export const Description: React.FC<IProps> = ({
  name,
  description,
}) =>  {
  return (
  <Box
    alignItems="flex-end"
    style={[styles.shadow, commonStyles.shadowLeft]}>
    <Box
      backgroundColor={Colors.dark}
      width={width * 0.8}
      paddingTop={ingredientImgSize / 2}
      paddingHorizontal={ESpacings.s16}
      paddingBottom={ESpacings.s32}
      marginTop={52}
      marginBottom={ESpacings.s16}
      borderTopLeftRadius={ERounding.r24}
      borderBottomLeftRadius={ERounding.r24}>
      <Image
        source={{uri: `https://www.thecocktaildb.com/images/ingredients/${name}-Medium.png`}}
        style={styles.img}
        resizeMode="contain"
      />
      <Typography
        h2
        center
        color={Colors.ice}
        marginVertical={ESpacings.s16}>
        Description
      </Typography>
      {description && (
        <Typography
          body
          color={Colors.ice}>
          {description}
        </Typography>
      )}
    </Box>
  </Box>
  )
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 10,
  },
  img: {
    width: ingredientImgSize,
    height: ingredientImgSize,
    position: 'absolute',
    top: - ingredientImgSize / 2,
    left: 0,
  }
});
