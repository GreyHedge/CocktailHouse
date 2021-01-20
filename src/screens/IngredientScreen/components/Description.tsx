import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Typography} from '../../../components';
import {Colors, ERounding, ESpacings, ingredientImgWidth} from '../../../constants';
import {width} from '../../../helpers';

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
    style={styles.shadow}>
    <Box
      backgroundColor={Colors.dark}
      width={width * 0.8}
      paddingTop={ingredientImgWidth / 2}
      paddingHorizontal={ESpacings.s16}
      paddingBottom={ESpacings.s32}
      marginTop={52}
      marginBottom={ESpacings.s16}
      borderTopLeftRadius={ERounding.r32}
      borderBottomLeftRadius={ERounding.r32}>
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
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  img: {
    width: ingredientImgWidth,
    height: ingredientImgWidth,
    position: 'absolute',
    top: - ingredientImgWidth / 2,
    left: 0,
  }
});
