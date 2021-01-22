import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {Box, Typography} from '@components';
import {TagList} from './TagList';
import {Colors, ESpacings, cocktailDetailInfoBlockWidth, buttonsMenuWidth} from '@constants';

interface IProps {
  name: string;
  iba: string;
  isAlcohol: boolean;
  img: ImageSourcePropType;
  category: string;
  glass: string;
}

export const Info: React.FC<IProps> = ({
  name,
  iba,
  isAlcohol,
  img,
  category,
  glass,
}) => {
  return (
    <Box style={styles.container}>
      <Typography
        title
        color={Colors.dark}
        marginRight={buttonsMenuWidth + ESpacings.s16}
        marginVertical={ESpacings.s16}
        marginLeft={ESpacings.s16}>
        {name}
      </Typography>
      <Typography
        h3
        color={Colors.dark}
        marginLeft={ESpacings.s16}>
        IBA
      </Typography>
      <Typography
        body
        color={Colors.dark}
        paddingRight={60}
        marginBottom={ESpacings.s16}
        marginLeft={ESpacings.s16}>
        {iba}
      </Typography>
      <Box
        backgroundColor={Colors.reddish}
        width={cocktailDetailInfoBlockWidth}
        marginLeft={50}
        style={styles.imgContainer}>
        <Image
          style={styles.cocktailImg}
          source={img}
          resizeMode="contain"
        />
        <TagList
          isAlcohol={isAlcohol}
          category={category}
          glass={glass}
        />
      </Box>
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    zIndex: 10,
  },
  cocktailImg: {
    height: cocktailDetailInfoBlockWidth,
    width: cocktailDetailInfoBlockWidth,
  },
  imgContainer: {
    elevation: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
